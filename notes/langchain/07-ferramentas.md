# Ferramentas (Tools) no LangChain

## O que muda em relação ao conceito geral

O que é uma ferramenta, por que ela estende o que uma LLM consegue fazer sozinha, e como o modelo decide chamar uma (function calling), já está em [Ferramentas](/labs/ai/agents/03-ferramentas/). Aqui o assunto é a implementação: como criar e usar tools no LangChain.

## Tipos de tool

| Tipo               | Descrição                                                                  | Exemplo de uso                                    |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------------- |
| Built-in tools     | ferramentas prontas, já incluídas no LangChain ou em `langchain-community` | busca, Wikipedia, execução de Python              |
| API tools          | chamam uma API externa                                                     | clima, cotação financeira, API interna da empresa |
| Database tools     | consultam um banco de dados                                                | buscar em MySQL, PostgreSQL etc.                  |
| Tools customizadas | criadas a partir de uma função Python sua                                  | regra de negócio, serviço interno                 |
| Toolkits           | coleção de ferramentas relacionadas, empacotadas juntas                    | toolkit do SerpAPI, toolkit de SQL                |

## Ferramentas nativas mais usadas

- `SerpAPIWrapper` - busca no Google via SerpAPI (precisa de chave de API)
- `WikipediaQueryRun` - busca na Wikipedia
- `PythonREPLTool` - executa código Python
- `RequestsToolkit` - faz requisições HTTP genéricas
- `SQLDatabaseToolkit` - consulta bancos de dados SQL
- `ArxivQueryRun` - busca papers acadêmicos no arXiv
- `DuckDuckGoSearchRun` - busca na web sem precisar de chave de API
- `OpenWeatherMap` - consulta informação de clima

## Criando uma tool customizada

A forma mais direta é decorar uma função Python com `@tool`. A docstring da função vira a descrição que a LLM lê para decidir quando chamar essa ferramenta, então ela precisa ser clara, não é só documentação para humanos:

```python
from langchain.tools import tool

@tool
def calculadora(expressao: str) -> str:
    """Útil para cálculos matemáticos. A entrada deve ser uma expressão válida, por exemplo '5 * 4 + 10'."""
    try:
        return str(eval(expressao))
    except Exception as e:
        return f"Erro: {e}"
```

Vale um parênteses de segurança aqui: esse exemplo usa `eval()` só para manter a tool em três linhas e ilustrar a estrutura mínima de uma ferramenta. Fora de um exemplo didático, `eval` sobre uma entrada que vem (ainda que indiretamente) de uma LLM é um risco real de execução de código arbitrário, se o modelo for induzido, por prompt injection ou qualquer outro vetor, a passar uma expressão maliciosa. Numa tool de verdade, prefira uma biblioteca de avaliação segura de expressões matemáticas ou valide rigorosamente o que entra antes de avaliar. O tema de segurança em aplicações de LLM tem uma nota própria em [Boas Práticas e Segurança](/labs/ai/engenharia-de-prompt/02-boas-praticas-e-seguranca/).

## Usando uma tool de busca

```python
from langchain_community.utilities import SerpAPIWrapper
from langchain.tools import Tool

search = SerpAPIWrapper()
tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Pesquisa na internet por informação atualizada.",
    )
]
```

Essa lista de `tools` é o que se passa para um agente decidir entre as opções disponíveis, o exemplo completo de como ligar isso a um agente fica na próxima nota, [Agentes](/labs/ai/langchain/08-agentes/), para não duplicar o código de criação de agente aqui.

## Combinando várias tools

```python
tools = [search_tool, calculadora]
```

Uma lista com mais de uma ferramenta não muda nada na forma como você as define, o trabalho de decidir qual usar, em que ordem, fica por conta do agente que vai recebê-las, não da tool em si.

## O que faz uma boa descrição de tool

A LLM escolhe qual ferramenta chamar basicamente lendo a descrição de cada uma, então a qualidade dessa descrição decide a taxa de acerto da escolha:

- diga exatamente para que a ferramenta serve, não só o nome ("busca o clima atual de uma cidade", não "ferramenta de clima")
- descreva o formato esperado da entrada, se não for óbvio
- evite descrições que se sobrepõem entre duas tools diferentes, isso confunde o modelo na hora de escolher
- para tarefas sensíveis (escrever em um banco, enviar um e-mail, mexer com dinheiro), deixe explícito na descrição o que a ferramenta faz, para reduzir o risco de uso indevido

## Referências

- [Tools](https://docs.langchain.com/oss/python/langchain/tools) - LangChain, documentação oficial, en
- [Ferramentas](/labs/ai/agents/03-ferramentas/) - nota deste repositório, para o conceito de tool calling
