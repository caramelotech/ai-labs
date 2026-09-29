# Engenharia de Datasets

O processo mecânico de [fine-tuning](/labs/ai/llm/11-fine-tuning/) não é a parte difícil: frameworks como Hugging Face `transformers` ou Axolotl cuidam do loop de treino, e LoRA já vem com hiperparâmetros padrão sensatos. O que separa um fine-tuning que funciona de um que não funciona é quase sempre o dataset usado para treinar. Engenharia de datasets é a disciplina de pensar em que comportamento você quer que o modelo aprenda e desenhar os dados que ensinam exatamente isso.

## Por que um bom dataset importa mais que volume

Três critérios definem se um dataset serve para treinar um modelo:

- **Quality (qualidade):** os exemplos estão corretos, bem escritos e livres de ruído? Um exemplo com resposta errada ensina o modelo a errar.
- **Coverage (cobertura):** o dataset representa a variedade de situações que o modelo vai encontrar em produção, incluindo casos raros e formulações diferentes da mesma pergunta?
- **Quantity (quantidade):** tem exemplo suficiente para o modelo generalizar o padrão, sem decorar exemplos específicos?

Esses três eixos competem entre si na prática. É tentador focar só em quantidade porque é o mais fácil de medir ("temos 50 mil exemplos"), mas um dataset pequeno e bem curado costuma treinar um modelo melhor do que um dataset grande e ruidoso. Isso faz sentido se você pensar em como o treino funciona: cada exemplo ruim empurra os pesos do modelo na direção errada, e um volume grande de exemplos ruins não se cancela sozinho, ele vira ruído consistente que o modelo aprende a reproduzir.

Cobertura importa por um motivo parecido: um dataset com muitos exemplos mas todos parecidos (mesmo estilo de pergunta, mesmo domínio) treina um modelo que só funciona bem naquele recorte estreito. Diversidade de tópicos, formulações e níveis de dificuldade é o que faz o modelo generalizar para perguntas que ele nunca viu no treino, exatamente o cenário que ele vai encontrar em produção.

Por causa dessa complexidade, muitos times já criam um papel dedicado de **engenharia de dados**, focado em adquirir e curar os datasets certos e em garantir privacidade e compliance dos dados usados (por exemplo, remover PII antes de treinar).

## Dados por fase de treino

O que conta como "dado bom" muda de acordo com a fase de treino:

| Fase                              | Tipo de dado                                                                                                                   | Escala típica                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| Pre-training                      | Texto bruto da internet, livros, código (sem rótulo)                                                                           | Bilhões a trilhões de tokens                       |
| Instruction finetuning            | Pares (instrução, resposta esperada), ver [Instruction tuning](/labs/ai/llm/11-fine-tuning/)                                   | Milhares a algumas dezenas de milhares de exemplos |
| Preference finetuning (alignment) | Pares comparativos: mesma pergunta, duas respostas, uma marcada como preferida, ver [RLHF e DPO](/labs/ai/llm/11-fine-tuning/) | Milhares de comparações                            |

Pre-training precisa de volume descomunal de texto genérico, sem anotação nenhuma: o modelo aprende estrutura de linguagem e conhecimento de mundo só de prever o próximo token repetidamente. Instruction finetuning já é outro jogo: menos volume, mas cada exemplo precisa mostrar o formato exato de instrução e resposta que você quer que o modelo siga. Preference finetuning é ainda mais específico: não basta uma resposta certa, é preciso um par comparativo (A é melhor que B) para o modelo aprender a preferência, não só o formato.

## Dados sintéticos

Conseguir dado real e anotado por humano é caro e lento, especialmente para instruction finetuning, onde cada exemplo exige alguém escrevendo tanto a pergunta quanto uma resposta de qualidade. Gerar dado programaticamente sempre foi um objetivo, mas só virou prática viável em larga escala quando os próprios LLMs ficaram bons o suficiente para gerar dado realista e coerente. Hoje é comum usar um LLM forte para gerar os dados de treino de outro modelo (às vezes o mesmo modelo, às vezes um modelo menor).

Três técnicas conhecidas de síntese de dados de instrução:

- **Self-Instruct:** parte de um conjunto pequeno de exemplos escritos por humano (o paper original usa 175) e pede para um LLM gerar novas instruções e respostas no mesmo estilo, expandindo o seed set em bola de neve. O Alpaca, um dos primeiros modelos abertos ajustados por instrução, usou essa técnica com o `text-davinci-003` da OpenAI para gerar 52 mil exemplos a partir de um seed pequeno.
- **Evol-Instruct (WizardLM):** em vez de só gerar exemplos novos no mesmo nível, pega instruções existentes e as reescreve para ficarem progressivamente mais complexas, seja **em profundidade** (adicionando restrições, exigindo mais raciocínio, indo mais fundo no domínio) seja **em amplitude** (criando variações que cobrem cenários diferentes). O resultado é um currículo de exemplos que vai do simples ao difícil, em vez de um monte de exemplos todos do mesmo nível.
- **Destilação de um modelo professor (Orca):** em vez de só copiar o par (instrução, resposta) de um modelo maior, o Orca pede ao modelo professor (GPT-4, no paper original) para explicar seu raciocínio passo a passo antes de responder, e treina o modelo menor nesses **traços de explicação**. Isso ataca um problema conhecido da destilação simples: um modelo pequeno treinado só em pares de instrução e resposta costuma imitar o _estilo_ do professor sem aprender a _raciocinar_ como ele. Aprender com o raciocínio explicado, não só com a resposta final, transfere mais capacidade de fato.

## Riscos da síntese de dados

Gerar dado sintético não é isento de problemas, e alguns só aparecem depois que o modelo treinado já está em produção:

- **Colapso de diversidade:** um LLM gerando muitos exemplos tende a convergir para os mesmos poucos templates e frases de abertura, mesmo variando o prompt. O dataset sintético parece grande em contagem de exemplos, mas é pobre em variedade real, o que anula boa parte do ganho de cobertura que a síntese deveria trazer.
- **Viés amplificado:** se o modelo professor tem um viés (favorece um estilo de resposta, erra sistematicamente em um tópico), o modelo treinado nos dados sintéticos herda esse viés e pode até amplificá-lo, porque o viés vira o padrão dominante nos dados de treino em vez de um erro ocasional.
- **Mitigação:** filtrar exemplos de baixa qualidade automaticamente, deduplicar exemplos muito parecidos entre si e reservar uma amostra para checagem humana antes de considerar o dataset pronto.

## Verificação e avaliação de dados sintéticos

Dado sintético precisa passar pelo mesmo crivo que dado real antes de virar treino: não existe atalho só porque foi um LLM que gerou. Avaliar dado gerado por IA tem a mesma dificuldade de avaliar qualquer saída de LLM (ver [Avaliação de LLMs](/labs/ai/llm/06-avaliacao-de-llms/)), e na prática os times que mais usam dado sintético são os que conseguem avaliá-lo de forma confiável, seja com um LLM-as-judge dedicado a esse fim, seja com regras automáticas de qualidade específicas do domínio.

Vale lembrar que boa parte do trabalho de engenharia de datasets não é automatizável: dá para automatizar a _geração_ de exemplos, mas pensar em que comportamento o dataset precisa ensinar, escrever as diretrizes de anotação e revisar os casos de borda continua sendo trabalho humano.

## Referências

- [Self-Instruct: Aligning Language Models with Self-Generated Instructions](https://arxiv.org/abs/2212.10560) - Wang et al., arXiv, en
- [Orca: Progressive Learning from Complex Explanation Traces of GPT-4](https://arxiv.org/pdf/2306.02707) - Mukherjee et al. (Microsoft Research), arXiv, en
- [WizardLM: Empowering Large Language Models to Follow Complex Instructions](https://arxiv.org/pdf/2304.12244) - Xu et al., arXiv, en
