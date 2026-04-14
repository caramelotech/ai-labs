# AI Labs

Base de conhecimento sobre **Inteligência Artificial** da Caramelo Tech, com foco em aprendizado prático e acessível.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-brightgreen)](https://caramelotech.github.io/ai-labs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

## O que você vai encontrar

- Anotações sobre fundamentos de IA e Prompt Engineering
- Exemplos práticos de uso de modelos de linguagem
- Exercícios hands-on para fixação de conceitos
- Mini projetos aplicados

## Conteúdo

| Tópico                  | Descrição                                     |
| ----------------------- | --------------------------------------------- |
| Introdução à IA         | O que é IA, ML, Deep Learning, LLMs          |
| Engenharia de Prompts   | Conceitos, técnicas e frameworks de prompting |
| Recursos de Aprendizado | Cursos, livros, ferramentas e comunidades     |

## Estrutura do repositório

```
ai-labs/
├── src/content/docs/   → Anotações e estudos (publicadas no site)
├── examples/           → Exemplos de código, exercícios e projetos práticos
│   ├── exercises.md    → Exercícios propostos
│   └── projects.md     → Projetos práticos
└── LICENSE
```

## Como usar

1. Comece pelas anotações em `src/content/docs/`
2. Explore os exemplos em `examples/`
3. Resolva os exercícios em `examples/exercises.md`
4. Construa os projetos em `examples/projects.md`

## Rodando localmente

```bash
npm install
npm run dev     # servidor em localhost:4321
npm run build   # build de produção
npm run preview # preview do build
```

Visualize o site em: https://caramelotech.github.io/ai-labs

## Adicionando notas

Crie um arquivo `.md` em `src/content/docs/` com o seguinte frontmatter:

```yaml
---
title: "Título da Nota"
description: "Descrição de uma linha"
lastUpdated: 2026-01-01
sidebar:
  order: N
tags: ["tag1", "tag2"]
---
```

Para organizar em subpastas, crie o arquivo dentro de `src/content/docs/nome-da-pasta/`. Use `index.md` como página inicial da pasta.

## Contribuição

Contribuições são bem-vindas! Veja o [Guia de Contribuição](.github/CONTRIBUTING.md) para detalhes.

- Melhorias nas anotações
- Novos exemplos práticos
- Exercícios adicionais
- Projetos aplicados

## Licença

MIT
