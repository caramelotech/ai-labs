# Tokens em Modelos de Linguagem

No contexto da IA, especialmente em PLN, um **token** é uma unidade individual de informação ou dado. Ao processar texto, um token pode ser:

- Uma palavra
- Parte de uma palavra
- Um caractere especial

Os tokens são fundamentais porque definem como os modelos de linguagem processam e geram texto. Eles também impactam diretamente os **custos das APIs de IA**, já que a maioria dos serviços cobra pela quantidade de tokens processados (entrada + saída).

Por exemplo, a frase `Inteligência Artificial é incrível` pode ser dividida em aproximadamente 6 a 8 tokens, dependendo do modelo.

Diferentes modelos de IA utilizam **sistemas de tokenização distintos**, o que gera variações na quantidade de tokens para o mesmo texto. Em idiomas não ingleses, como o português, a tokenização tende a ser menos eficiente, resultando em **mais tokens por palavra**.

As IAs **preveem o próximo token na sequência** baseando-se nos tokens anteriores. Esse processo probabilístico é o que permite aos LLMs gerar textos coerentes e contextualmente relevantes, apesar de não "compreenderem" verdadeiramente o significado como humanos fazem.

Termos como "**pensar**", "**cérebro**" e "**neurônio**" são apenas **analogias** para facilitar a compreensão: esses modelos não pensam de verdade, são funções matemáticas complexas que aprendem padrões em grandes conjuntos de dados.

É justamente esse limite de tokens que a IA consegue processar de uma vez que dá origem à **janela de contexto**, tema do próximo tópico, [Context Engineering e RAG](/labs/ai/llm/05-context-engineering-e-rag/).
