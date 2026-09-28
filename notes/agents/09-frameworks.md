# Frameworks de Agentes

## Por que usar um framework

No [Hands-on: Agente SecretarIA](/labs/ai/agents/05-hands-on-secretaria/) o loop do agente foi escrito na mão: um `while` que manda a mensagem para o modelo, checa se ele pediu uma ferramenta, executa e repete. Para um agente pequeno isso funciona e é ótimo para entender o que acontece por baixo.

O problema aparece quando o agente cresce. Você acaba reimplementando as mesmas coisas toda vez:

- o loop de raciocínio e ação, com tratamento de erro e critério de parada
- o controle do histórico da conversa e o corte quando o contexto estoura
- a montagem dos schemas de ferramenta e a validação dos parâmetros que o modelo devolve
- memória de longo prazo, quando o agente precisa lembrar de sessões anteriores
- a coordenação entre vários agentes

Um framework de agentes entrega essa infraestrutura pronta e deixa você focar na lógica do seu problema. A troca é a de sempre: menos código para escrever, menos controle sobre os detalhes e uma dependência a mais para manter. Para um agente realmente simples, o framework às vezes só adiciona peso.

## Panorama dos principais frameworks

O ecossistema muda rápido e os nomes abaixo são os mais citados em 2026. Todos são bibliotecas Python (alguns também em JavaScript ou .NET) e todos suportam tool calling e [MCP](/labs/ai/agents/06-mcp/).

### LangChain

O framework mais citado do ecossistema, e a base da qual boa parte dos outros nomes desta lista herda alguma coisa. Ocupa a camada de aplicação: interface padronizada para conversar com modelos de vários provedores, montagem e versionamento de prompts, tool calling e memória de conversa. Desde a reformulação v1 (2025), o próprio harness de agentes do LangChain (`create_agent`) passou a rodar sobre o LangGraph por baixo dos panos, herdando dali execução durável, checkpoints e pausas para revisão humana - a fronteira entre "só LangChain" e "LangChain com LangGraph" ficou mais tênue do que era antes. Funciona bem sozinho para um fluxo mais linear, como um chatbot com RAG; quando a complexidade cresce (múltiplos agentes, ciclos, estado persistente), o caminho natural é passar a mexer no LangGraph diretamente.

### LangGraph

Da mesma família do LangChain. Modela o agente como um **grafo de estados**: cada nó é uma etapa (um agente, uma ferramenta, uma decisão) e as arestas dizem para onde o fluxo vai depois. Dá bastante controle e previsibilidade, aceita ciclos (um nó pode voltar para outro) e tem suporte a memória e a pausas para revisão humana. É o que costuma ser escolhido para agentes com estado rodando em produção. Aparece no hands-on de [Sistemas Multi-Agentes](/labs/ai/agents/10-multi-agents/).

### CrewAI

Trabalha com a ideia de um **time**: você define agentes com papéis ("pesquisador", "redator", "revisor"), dá uma tarefa e um objetivo comum, e eles colaboram e delegam entre si. O modelo mental é mais simples que o do LangGraph e monta um fluxo multi-agente com pouco código. Bom quando o que você quer é prototipar rápido.

### AutoGen e Microsoft Agent Framework

O **AutoGen**, da Microsoft, modela o trabalho como uma **conversa entre agentes** que trocam mensagens até resolver a tarefa, com execução de código no meio. A Microsoft está unificando o AutoGen com o **Semantic Kernel** (o SDK dela para integrar IA em aplicações corporativas, forte no mundo .NET) em um projeto único, o **Microsoft Agent Framework**.

### OpenAI Agents SDK

SDK leve da OpenAI, sucessor do experimento Swarm. Tem integração direta com os modelos da OpenAI, mas é agnóstico o suficiente para funcionar com outros provedores. Faz sentido quando seu sistema já é bastante ligado ao ecossistema OpenAI.

### LlamaIndex

Nasceu focado em **indexação e recuperação de dados** e é a escolha comum para agentes que dependem muito de RAG: conectores para várias fontes, indexação vetorial e busca em coleções grandes de documentos privados. Ver [Arquiteturas de RAG](/labs/ai/llm/08-arquiteturas-de-rag/).

### smolagents

Biblioteca enxuta e de código aberto da Hugging Face, sucessora do antigo `transformers.agents`. Funciona com praticamente qualquer LLM (local ou via API) e tem uma proposta particular: o agente escreve as ações como **código Python** em vez de só preencher um JSON de chamada de ferramenta.

### Combinando as camadas

Os frameworks acima não competem todos entre si - um padrão comum em produção é combinar três deles em camadas: o LlamaIndex cuida da ingestão e recuperação de dados, o LangChain monta a lógica da aplicação (prompts, ferramentas, memória) e o LangGraph orquestra o fluxo entre agentes e estados. Não é preciso adotar os três de uma vez: comece pelo que resolve o problema que você tem hoje e componha o resto conforme a necessidade aparecer.

Vale uma ressalva sobre essa separação: ela ajuda a entender o papel de cada um, mas não é tão rígida quanto parece. O LangChain, como vimos, já roda sobre o LangGraph por dentro, e o LlamaIndex ganhou seu próprio motor de orquestração (LlamaIndex Workflows) - "camada de dados" e "camada de orquestração" já se sobrepõem um pouco na prática.

## Como escolher

Não existe framework "melhor", existe o que encaixa no seu caso. Algumas perguntas que ajudam:

| Pergunta                                                            | Puxa para                                      |
| -------------------------------------------------------------------- | ----------------------------------------------- |
| Preciso de prompts, tools e memória prontos, sem workflow complexo? | LangChain                                       |
| Preciso controlar cada passo e ter fluxo previsível?                | LangGraph                                       |
| Quero prototipar um time de agentes rápido?                         | CrewAI                                          |
| O agente vive de buscar em documentos?                              | LlamaIndex                                      |
| Já estou preso ao ecossistema OpenAI ou Microsoft?                  | OpenAI Agents SDK ou Microsoft Agent Framework  |
| É um agente simples de poucas ferramentas?                          | Nenhum, o loop na mão basta                     |

Vale começar pequeno, com um framework só (ou sem nenhum), e trocar depois se a necessidade aparecer. Migrar de framework dá trabalho, então evite adotar três "para testar".

## Referências

- [8 Principais Frameworks Python Para Agentes de IA](https://blog.dsacademy.com.br/8-principais-frameworks-python-para-agentes-de-ia/) - Data Science Academy, pt-BR
- [Melhores Frameworks de Agentes de IA em 2026](https://www.flowhunt.io/pt/blog/ai-agent-frameworks/) - FlowHunt, pt-BR
- [O que é o LangChain?](https://cloud.google.com/use-cases/langchain?hl=pt-BR) - Google Cloud, pt-BR
- [LangChain Overview](https://docs.langchain.com/oss/python/langchain/overview) - LangChain (docs oficiais), en
- [The best AI agent frameworks in 2026](https://www.langchain.com/resources/ai-agent-frameworks) - LangChain, en
- [Introducing smolagents](https://huggingface.co/blog/smolagents) - Hugging Face, en
