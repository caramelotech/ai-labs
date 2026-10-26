# O que é Machine Learning

Quando um sistema reconhece o rosto de alguém numa foto, filtra um e-mail como spam ou sugere o próximo vídeo que você provavelmente vai assistir, tem Machine Learning por trás. A ideia central é simples: em vez de alguém escrever regras explícitas ("se o e-mail contém a palavra X, marque como spam"), o sistema aprende os padrões sozinho, a partir de exemplos.

## Machine Learning dentro da Inteligência Artificial

Machine Learning (ML) é a subárea da Inteligência Artificial que constrói modelos capazes de aprender padrões a partir de dados, em vez de seguir instruções programadas manualmente. A diferença fica mais clara com um exemplo:

- **Abordagem baseada em regras:** um programador escreve explicitamente "se a transação é maior que R$ 5.000 e ocorre fora do horário comercial, marque como suspeita". Funciona até aparecer um padrão de fraude que ninguém previu.
- **Abordagem orientada a dados (ML):** o sistema recebe milhares de transações já marcadas como fraude ou não, e aprende por conta própria quais combinações de características indicam risco, inclusive padrões que um humano não enxergaria de cara.

Essa troca "regras escritas à mão" por "padrões aprendidos de dados" é o que torna ML útil em problemas onde as regras seriam complexas demais, mudam com frequência, ou simplesmente não são conhecidas de antemão.

Alguns exemplos do dia a dia:

- **Filtro de spam:** aprende, a partir de milhares de e-mails já classificados, quais características (palavras, remetente, formatação) indicam spam
- **Previsão de preço de imóvel:** aprende a relação entre características de um imóvel (área, localização, número de quartos) e seu preço de venda
- **Reconhecimento de imagem:** aprende a identificar objetos, rostos ou cenas a partir de milhares de fotos já rotuladas
- **Sistemas de recomendação:** aprende, a partir do histórico de interações, quais produtos ou conteúdos um usuário provavelmente vai gostar
- **Detecção de fraude:** aprende a distinguir transações legítimas de fraudulentas a partir de casos passados

Esses exemplos caem em quatro tipos de problema que ML resolve com frequência:

- **Classificação:** prever uma categoria (é spam ou não é spam?)
- **Regressão:** prever um valor numérico contínuo (quanto vale esse imóvel?)
- **Clustering:** agrupar itens parecidos sem saber de antemão os grupos (quais perfis de cliente existem na minha base?)
- **Detecção de anomalias:** identificar o que é fora do padrão (essa transação é estranha?)

As notas seguintes desta seção detalham os algoritmos usados para cada um desses problemas.

## Tipos de aprendizado

Nem todo problema de ML tem a mesma estrutura de dados disponível. A forma como os dados chegam até o modelo define o tipo de aprendizado:

### Aprendizado Supervisionado

O modelo recebe pares de entrada e saída já conhecidos (dados rotulados) e aprende a mapear um para o outro. É como estudar com um gabarito: você vê a pergunta e a resposta certa, repetidas vezes, até aprender o padrão. Usado em classificação (prever categoria) e regressão (prever número). É o tipo de aprendizado mais usado na prática, porque costuma dar os resultados mais previsíveis quando há dados rotulados disponíveis.

### Aprendizado Não Supervisionado

Aqui não existe gabarito: os dados não têm rótulo, e o modelo precisa achar estrutura ou padrões escondidos por conta própria. É o que torna possível, por exemplo, descobrir que uma base de clientes se divide naturalmente em 4 ou 5 perfis distintos, sem que ninguém tenha definido esses perfis de antemão. Cobre clustering, redução de dimensionalidade e detecção de anomalias - temas da nota [Clustering e Redução de Dimensionalidade](/labs/ai/machine-learning/06-clustering-e-reducao-de-dimensionalidade/).

### Aprendizado Semi-Supervisionado

Uma solução para quando rotular dados é caro ou lento, mas você tem poucos exemplos rotulados e muitos não rotulados. O modelo aprende com os poucos rótulos disponíveis e usa a estrutura dos dados não rotulados para refinar esse aprendizado. É comum em áreas como diagnóstico médico (rotular uma imagem de exame exige um especialista) e inspeção industrial (marcar cada peça defeituosa manualmente não escala).

### Aprendizado por Reforço

Um paradigma diferente dos três anteriores: não há um dataset fixo de entrada e saída. Em vez disso, um **agente** interage com um **ambiente**, toma **ações** e recebe **recompensas** ou **penalidades** com base no resultado. Com o tempo, o agente aprende uma política que maximiza a recompensa acumulada. É a base de sistemas que jogam jogos (como os treinados pela DeepMind em Atari e Go) e de robótica. A nota [Aprendizado por Reforço](/labs/ai/machine-learning/09-aprendizado-por-reforco/) entra nos detalhes.

### Self-Supervised Learning

Um quinto tipo, menos citado em materiais introdutórios mas essencial para entender como os LLMs são treinados: o modelo gera seus próprios rótulos a partir da estrutura dos dados, sem precisar de anotação humana. Um exemplo clássico é esconder uma palavra de uma frase e treinar o modelo para prever qual palavra falta, usando o resto da frase como "rótulo" implícito. É exatamente esse mecanismo (prever o próximo token) que torna possível treinar um LLM em bilhões de páginas de texto sem que ninguém precise rotular cada uma manualmente. Mais sobre isso em [O que são LLMs](/labs/ai/llm/01-o-que-sao-llms/).

## O pipeline de um projeto de Machine Learning

Na prática, treinar um modelo é só uma etapa no meio de um processo maior. Um projeto de ML típico segue este fluxo:

```mermaid
flowchart LR
    A[Coleta de dados] --> B[Pré-processamento]
    B --> C[Análise exploratória]
    C --> D[Divisão treino/validação/teste]
    D --> E[Treino do modelo]
    E --> F[Avaliação]
    F --> G[Deploy e monitoramento]
    F -. ajustar e retreinar .-> E
```

Vale notar duas coisas sobre esse fluxo: primeiro, a seta pontilhada não é exceção, é regra. Raramente um modelo funciona bem de primeira. O caminho normal é avaliar, descobrir o que está errado (dados insuficientes, features mal escolhidas, modelo simples demais ou complexo demais) e voltar para etapas anteriores. Segundo, boa parte do esforço real de um projeto de ML não está em escolher ou treinar o algoritmo, está nas etapas de coleta e preparação dos dados, que são tratadas em detalhe na próxima nota: [Preparação e Avaliação de Dados](/labs/ai/machine-learning/02-preparacao-e-avaliacao-de-dados/).

## Referências

- [O que é Machine Learning? (Oracle Brasil)](https://www.oracle.com/br/artificial-intelligence/what-is-machine-learning.html) - Oracle, pt-BR
- [Introdução aos principais tipos de aprendizado de máquina (DIO)](https://www.dio.me/articles/introducao-aos-principais-tipos-de-aprendizado-de-maquina-fd1ef448cd3e) - DIO, pt-BR
- [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) - Google Developers, en
