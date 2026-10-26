# Prompts e Prompt Templates no LangChain

## De string formatada a template

As técnicas e boas práticas de engenharia de prompt em geral já estão em [Engenharia de Prompts](/labs/ai/engenharia-de-prompt/01-engenharia-de-prompts/). Aqui o assunto é mais estreito: como o LangChain representa um prompt no código.

A forma mais simples de montar um prompt é concatenar strings: `f"Explique {topico} em palavras simples."`. Funciona até o prompt crescer, ganhar várias variáveis, trocar de formato (texto simples para uma conversa com mensagens de sistema) ou precisar ser reaproveitado em vários pontos do código. O `PromptTemplate` e seus parentes existem para resolver exatamente isso: separam a estrutura do prompt (fixa) das variáveis que mudam a cada chamada.

## Tipos de prompt

| Tipo                     | Para que serve                                         | Caso de uso típico                              |
| ------------------------ | ------------------------------------------------------ | ----------------------------------------------- |
| `PromptTemplate`         | template de texto simples com variáveis                | perguntas e respostas básicas, geração de texto |
| `ChatPromptTemplate`     | prompt baseado em mensagens (sistema, humano, IA)      | chat models como `ChatOpenAI`                   |
| `MessagesPlaceholder`    | reserva um espaço para histórico de mensagens dinâmico | chat com memória de conversa                    |
| `FewShotPromptTemplate`  | inclui exemplos dentro do próprio prompt               | aprendizado por few-shot                        |
| `PipelinePromptTemplate` | combina vários templates num só                        | prompts complexos, montados em etapas           |

## PromptTemplate

```python
from langchain_core.prompts import PromptTemplate

template = PromptTemplate(
    input_variables=["topic"],
    template="Explique {topic} em palavras simples.",
)

prompt = template.format(topic="LangChain")
print(prompt)
# Explique LangChain em palavras simples.
```

## ChatPromptTemplate

Modelos de chat (a maioria dos modelos atuais) não recebem uma string solta, recebem uma lista de mensagens com um papel cada (sistema, humano, assistente). O `ChatPromptTemplate` monta essa lista a partir de um template:

```python
from langchain_core.prompts import ChatPromptTemplate

template = ChatPromptTemplate.from_messages([
    ("system", "Você é um assistente de IA útil."),
    ("human", "Explique {topic} em palavras simples."),
])

mensagens = template.format_messages(topic="LangChain")
```

A mensagem de sistema define o papel do modelo antes mesmo da pergunta chegar, o mesmo papel que a mensagem de sistema cumpre em qualquer chat model (ver [Engenharia de Prompts](/labs/ai/engenharia-de-prompt/01-engenharia-de-prompts/) para a técnica em si).

## Few-shot prompting com FewShotPromptTemplate

Quando a tarefa fica mais sutil do que uma instrução consegue descrever, mostrar exemplos costuma funcionar melhor do que explicar com mais palavras. O `FewShotPromptTemplate` monta esse tipo de prompt a partir de uma lista de exemplos:

```python
from langchain_core.prompts import FewShotPromptTemplate, PromptTemplate

examples = [
    {"input": "Python", "output": "Uma linguagem de programação."},
    {"input": "LangChain", "output": "Um framework para construir aplicações de LLM."},
]

example_prompt = PromptTemplate(
    input_variables=["input", "output"],
    template="Entrada: {input}\nSaída: {output}",
)

few_shot = FewShotPromptTemplate(
    examples=examples,
    example_prompt=example_prompt,
    prefix="Responda no mesmo formato dos exemplos:",
    suffix="Entrada: {question}\nSaída:",
    input_variables=["question"],
)
```

Cada exemplo é formatado com `example_prompt`, e o resultado final junta o prefixo, os exemplos formatados e o sufixo com a pergunta real.

## Juntando um template com a LLM

Um template sozinho só formata texto, ele não chama o modelo. Para isso, compõe-se o template com a LLM usando o operador `|` (a mesma composição usada em chains, ver [Chains e LCEL](/labs/ai/langchain/05-chains-e-lcel/)):

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)
template = ChatPromptTemplate.from_messages([
    ("human", "Explique {topic} em palavras simples."),
])

chain = template | llm
response = chain.invoke({"topic": "LangChain"})
print(response.content)
```

Esse `template | llm` já é uma chain, só que com dois componentes. A próxima nota detalha o que acontece quando você encadeia mais peças do que isso.

## Dicas específicas de quando se usa templates

- defina o papel do modelo numa mensagem de sistema, em vez de repeti-lo em todo prompt humano
- use few-shot quando a instrução sozinha não for suficiente para o modelo acertar o formato
- peça saída estruturada (JSON, lista) quando o resultado for processado por código depois, isso evita parsing frágil de texto livre
- quebre instruções longas e complexas em etapas menores, encadeando templates e chains em vez de um prompt gigante tentando fazer tudo de uma vez

## Referências

- [Prompt Templates](https://docs.langchain.com/oss/python/langchain/prompts) - LangChain, documentação oficial, en
- [Engenharia de Prompts](/labs/ai/engenharia-de-prompt/01-engenharia-de-prompts/) - nota deste repositório, para as técnicas de prompt em si
