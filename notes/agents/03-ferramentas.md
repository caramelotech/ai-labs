# Uso de Ferramentas

## Por que ferramentas importam

Um LLM sozinho só sabe gerar texto: ele não consulta um banco de dados, não manda um e-mail, não sabe nem que horas são agora. **Ferramentas** (ou _tools_) são o que conecta esse texto gerado a ações reais, seja consultar uma API, rodar uma consulta SQL, ler um arquivo ou chamar outro sistema.

Sem ferramentas, um agente é só um chatbot bem-falante. Com ferramentas, ele vira capaz de realizar tarefas de verdade, e é justamente essa capacidade que separa IA generativa de agente de IA, como vimos em [O que são agentes de IA](/labs/ai/agents/01-o-que-e/).

## O que é uma ferramenta

Uma ferramenta é uma função de código de verdade: um trecho de programa que faz algo concreto, como tocar uma música, consultar o clima ou salvar um registro em um banco de dados. O modelo em si não tem essa função dentro dele, quem a escreve e disponibiliza é o sistema que constrói o agente.

Para o modelo conseguir usar essas funções, o sistema precisa apresentar a ele um **catálogo**: a lista de ferramentas disponíveis, com o nome de cada uma e uma descrição do que ela faz. É só olhando esse catálogo que o modelo consegue decidir se alguma ferramenta ajuda a resolver o pedido do usuário, e qual delas escolher.

Imagine um usuário pedindo "toca uma música pra mim" para um agente que tem este catálogo disponível:

| Ferramenta             | O que faz                                         |
| ---------------------- | ------------------------------------------------- |
| `tocar_musica(nome)`   | Toca uma música específica em um player conectado |
| `buscar_letra(musica)` | Busca a letra de uma música                       |
| `criar_playlist(nome)` | Cria uma playlist vazia com o nome informado      |

O modelo lê o pedido, percorre o catálogo e percebe que `tocar_musica` é a função que resolve o problema, então decide chamá-la. Se nenhuma ferramenta do catálogo servisse para o pedido (por exemplo, se o usuário pedisse para "desligar a geladeira" e não existisse nenhuma função relacionada), o comportamento esperado do agente é reconhecer isso e avisar o usuário, não inventar uma execução que não existe.

## Como uma ferramenta é descrita para o modelo

O modelo não enxerga o código da ferramenta, ele recebe uma descrição estruturada dizendo o que ela faz, quais parâmetros aceita e o que cada parâmetro significa. Isso costuma ser feito com um schema em JSON:

```json
{
  "name": "consultar_clima",
  "description": "Consulta a previsão do tempo para uma cidade em uma data específica",
  "parameters": {
    "type": "object",
    "properties": {
      "cidade": { "type": "string", "description": "Nome da cidade" },
      "data": { "type": "string", "description": "Data no formato AAAA-MM-DD" }
    },
    "required": ["cidade", "data"]
  }
}
```

Quanto mais clara a descrição, melhor o modelo escolhe (e usa corretamente) a ferramenta certa na hora certa. Isso importa ainda mais quando o catálogo tem ferramentas parecidas: se `tocar_musica` e `buscar_letra` tivessem descrições vagas como "lida com música", o modelo teria dificuldade em discriminar qual delas de fato toca o áudio. Uma descrição objetiva, dizendo exatamente o efeito da função, é o que permite ao modelo separar uma ferramenta da outra.

## Quem executa a ferramenta de verdade

Um ponto que costuma confundir: o modelo **não tem capacidade de executar código**. Ele é, no fundo, um gerador de texto, o que ele faz ao "chamar uma ferramenta" é gerar um texto estruturado (geralmente JSON) dizendo qual função quer usar e com quais parâmetros. Quem lê esse texto, valida e roda a função de verdade é o sistema do agente, o código que está por fora do modelo orquestrando toda a conversa.

```mermaid
sequenceDiagram
    participant U as Usuário
    participant M as Modelo
    participant S as Sistema do Agente
    participant F as Ferramenta
    U->>M: Pergunta
    M->>M: Raciocina e decide chamar uma ferramenta
    M->>S: Gera a intenção de chamada (nome + parâmetros)
    S->>F: Executa a função de verdade
    F->>S: Resultado da execução
    S->>M: Observação com o resultado
    M->>U: Resposta final
```

Essa separação é importante: o modelo só decide _o quê_ chamar, o sistema do agente é quem de fato _executa_ a chamada, valida os dados e devolve o resultado. Esse ciclo segue o mesmo padrão do [ReAct](/labs/ai/agents/02-react/), o modelo raciocina, decide chamar uma ferramenta, o sistema executa essa chamada fora do modelo e devolve o resultado como uma observação para o próximo passo de raciocínio.

## Onde as ferramentas se conectam

Na prática, quase nenhuma ferramenta faz o trabalho sozinha. Ela costuma ser um **envelope** em volta de algo que já existe: a função `buscar_pedido(id_pedido)` que o modelo enxerga por dentro chama uma API, consulta um banco ou fala com outro serviço da empresa. O modelo só vê o nome, a descrição e os parâmetros. O que acontece do outro lado é problema do código da ferramenta.

```mermaid
flowchart LR
    M[Modelo] --> S[Sistema do agente]
    S --> T[Ferramenta]
    T --> R[API REST]
    T --> G[GraphQL]
    T --> P[gRPC]
    T --> D[(Banco SQL ou NoSQL)]
```

### APIs REST

É o caso mais comum. Cada endpoint útil vira uma ferramenta: `GET /pedidos/{id}` vira `buscar_pedido`, `POST /pedidos` vira `criar_pedido`. O código da ferramenta monta a requisição HTTP, manda o token de autenticação (que o modelo nunca vê) e devolve a resposta em texto curto. Vale resumir a resposta: despejar um JSON de 300 linhas no contexto do modelo gasta tokens e atrapalha mais do que ajuda.

### GraphQL

No GraphQL o cliente escreve a consulta dizendo exatamente quais campos quer. Isso é flexível, e justamente por isso pede cuidado: se o modelo pudesse escrever qualquer consulta, ele poderia pedir dados demais ou consultas pesadas. O jeito mais seguro é expor ferramentas com consultas prontas (`buscar_cliente(id)`) e deixar o modelo preencher só os parâmetros.

### gRPC

O gRPC é comum em serviços internos, onde o contrato entre os sistemas é definido de forma tipada (em arquivos `.proto`). Como o contrato já diz quais métodos e tipos existem, é fácil transformar cada método em uma ferramenta com schema claro. A ideia é a mesma da API REST: o modelo pede, o sistema do agente chama o serviço.

### Bancos de dados SQL e NoSQL

Consultar um banco é a forma mais direta de tirar o modelo do "acho que lembro" e trazê-lo para dados reais e atuais. Serve tanto para bancos SQL (PostgreSQL, MySQL) quanto NoSQL (MongoDB, Redis): a ferramenta recebe parâmetros, executa a consulta e devolve as linhas ou documentos encontrados.

Só que um banco tem dado sensível e comandos destrutivos, então o acesso precisa de regras:

- **Permissão mínima:** a conta usada pelo agente deve poder só o que a tarefa exige. Se o agente só consulta, a conta é somente leitura. Assim, mesmo que algo dê errado, um `DROP TABLE` simplesmente não funciona
- **Views autorizadas:** em vez de liberar as tabelas inteiras, exponha views com as colunas e linhas que o agente pode ver
- **Contas separadas:** se o agente precisa ler e também gravar, use duas contas, uma de leitura e outra de escrita, cada uma com o menor escopo possível
- **Nada de SQL arbitrário:** evite uma ferramenta genérica tipo `executar_sql(texto)`. Prefira ferramentas específicas (`consultar_pedidos_do_cliente(id)`), em que o modelo só escolhe os parâmetros. Um SQL escrito pelo modelo sofre do mesmo problema de uma injeção de SQL clássica, porque o texto pode ser influenciado por quem conversa com o agente
- **Backup e logs:** mantenha backup para recuperar dados e registre cada comando executado, para investigar depois

### Dar poder demais ao modelo

Todos esses cuidados vêm da mesma ideia, que o OWASP chama de **Excessive Agency** (agência excessiva): o agente ganha mais ferramentas, permissões ou autonomia do que a tarefa precisa, e qualquer falha (uma alucinação, um prompt malicioso escondido em um documento) vira um estrago real. A regra prática é dar ao agente o mínimo de poder para cumprir o trabalho e validar tudo do lado do sistema, como descrito em [O que faz funcionar](#o-que-faz-funcionar). Para o restante das camadas de proteção, veja [Agentes em Produção](/labs/ai/agents/15-agentes-em-producao/).

## O que faz funcionar

Alguns pontos separam uma implementação que funciona bem na prática de uma que trava ou erra:

- Poucas ferramentas, bem descritas, funcionam melhor do que muitas ferramentas parecidas, quanto mais opções semelhantes o modelo tem, mais fácil ele escolher a errada
- Nomes e parâmetros diretos reduzem erro: `buscar_pedido(id_pedido)` é mais claro que `processar(dados)`
- Validação do lado do sistema é obrigatória, nunca confie cegamente no que o modelo decidiu chamar, valide parâmetros e permissões antes de executar qualquer ação real
- Erros devem virar observação em vez de travar o processo, se uma ferramenta falha, devolva isso como texto para o modelo, assim ele pode tentar de novo ou avisar o usuário

Esse mecanismo de descrição de ferramenta mais chamada estruturada é a base sobre a qual protocolos como o [MCP](/labs/ai/agents/06-mcp/) foram construídos para padronizar como agentes descobrem e usam ferramentas.

## Referências

- [Práticas recomendadas para proteger interações de agentes com o Protocolo de Contexto de Modelo](https://docs.cloud.google.com/sql/docs/mysql/secure-agent-interactions-mcp?hl=pt-BR) - Google Cloud, pt-BR
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) - OWASP, en
- [Function calling](https://developers.openai.com/api/docs/guides/function-calling) - OpenAI, en
