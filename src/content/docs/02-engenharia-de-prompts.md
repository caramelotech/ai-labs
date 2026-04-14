---
title: "Engenharia de Prompts"
description: "Técnicas e frameworks de prompting para modelos de linguagem, do zero-shot ao ReAct."
lastUpdated: 2026-02-01
sidebar:
  order: 2
tags: ["prompt-engineering", "llm", "ia"]
---

## Prompts

No contexto da IA, especialmente em modelos de linguagem, um **prompt** é uma instrução ou estímulo dado ao sistema para obter uma resposta ou comportamento específico. Geralmente apresentado em forma de texto, o prompt funciona como um gatilho para o modelo de IA, indicando o tipo de informação ou resposta desejada pelo usuário - ou seja, uma espécie de "pergunta" ou "comando" que guia a máquina a gerar respostas.

Prompts podem variar desde perguntas simples, como _"como está o clima hoje?"_, até consultas mais elaboradas. Entretanto, perguntas genéricas tendem a gerar respostas amplas e menos úteis. Para resultados mais precisos e relevantes, recomenda-se fornecer informações específicas, como _"qual é a previsão do tempo em Fortaleza para hoje?"_.

## Prompt de Atuação

Trata-se de uma técnica empregada para **controlar o estilo do texto** gerado por inteligência artificial. Esta abordagem oferece aplicações diversificadas, incluindo o aprimoramento da precisão da IA em tarefas específicas, como a resolução de problemas matemáticos.

A implementação do **Prompting de Atuação** é direta: basta orientar a IA a assumir uma função específica, como _"atuar como crítico de moda"_ ou _"agir como especialista em determinada área"_.

Também conhecida como **Role Prompting**, essa estratégia direciona o modelo a adotar uma perspectiva ou expertise particular, resultando em respostas mais alinhadas ao contexto desejado. Por exemplo, ao solicitar que a IA atue como um professor, as respostas tendem a ser mais didáticas e explicativas.

## Prompt Engineering

**Engenharia de Prompts** é definida como o processo de orientar soluções de inteligência artificial generativa para gerar resultados desejados.

A engenharia de prompts envolve escolher **formatos, frases e símbolos** adequados para orientar a IA, sendo crucial para desenvolvedores na automatização de tarefas, exploração de possibilidades e aprimoramento da colaboração.

### Tipos de técnicas de prompting

| Técnica                       | Descrição                                         |
| ----------------------------- | ------------------------------------------------- |
| **Zero-Shot**                 | Sem exemplos prévios, apenas com instruções       |
| **One-Shot / Few-Shot**       | Fornece alguns exemplos para o modelo seguir      |
| **Chain of Thought (CoT)**    | Raciocínio passo a passo                          |
| **Skeleton of Thought (SoT)** | Estrutura lógica pré-definida                     |
| **Tree of Thought (ToT)**     | Exploração de múltiplos caminhos de raciocínio    |
| **Self-Consistency**          | Execução múltipla para maior confiabilidade       |
| **Directional Stimulus**      | Guia a resposta com comandos direcionais          |
| **ReAct**                     | Combina raciocínio com execução de ações externas |

> **Material complementar:** Para aprofundar, consulte materiais como _Prompt Engineering para Desenvolvedores_ (PDF e cursos disponíveis em diversas plataformas).

## Framework de Prompt

Utilizado por profissionais da área, este framework estrutura-se em **cinco elementos essenciais**: **papel, instruções, perguntas, contexto e exemplos**. Cada componente desempenha uma função estratégica na elaboração do prompt, permitindo compreender não apenas o conteúdo a incluir, mas também **a sequência ideal** de cada elemento para otimizar os resultados gerados por sistemas de inteligência artificial como o ChatGPT.

- **Papel (Role):** Define a persona ou especialização que a IA deve assumir, como "especialista em marketing" ou "professor de matemática".
- **Instruções (Instructions):** Comandos claros e específicos sobre o que você deseja que a IA faça, incluindo formato, tom e estilo da resposta.
- **Perguntas (Questions):** A questão central ou tarefa que você quer que a IA resolva ou responda.
- **Contexto (Context):** Informações relevantes de fundo que ajudam a IA a compreender melhor a situação e gerar respostas mais precisas.
- **Exemplos (Examples):** Amostras concretas do tipo de resposta esperada, especialmente útil em técnicas Few-Shot.

A **sequência dos elementos impacta diretamente o desempenho do modelo**. Questões como _"posicionar a instrução no início do prompt produz o mesmo resultado que posicioná-la no final?"_ são abordadas através de testes práticos e orientações fundamentadas em pesquisas e experiências documentadas.

## Prompt de Preparação

O **Prompt de Preparação** é uma técnica avançada em que você primeiro instrui a IA sobre **como deseja que ela se comporte em interações futuras**, estabelecendo regras, formatos e expectativas antes de fazer a pergunta principal.

Essa abordagem é particularmente útil em conversas longas ou quando você precisa que a IA mantenha um padrão consistente ao longo de múltiplas respostas.

**Exemplo:** Você pode preparar a IA dizendo _"Responda sempre de forma concisa, usando bullet points, e cite fontes quando relevante"_ antes de fazer suas perguntas subsequentes.

## Próximos Passos

- [Introdução à Inteligência Artificial](01-introducao-ia)
- [Recursos para Aprendizado](recursos)
