# AI Labs

Base de conhecimento sobre **Inteligência Artificial** do Caramelo Tech, com foco em aprendizado prático e acessível.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

As notas deste repositório são publicadas no site do [Caramelo Labs](https://caramelotech.com.br/labs/ai/).

## O que você vai encontrar

- Anotações sobre fundamentos de IA e Prompt Engineering
- Exemplos práticos de uso de modelos de linguagem
- Exercícios hands-on para fixação de conceitos
- Mini projetos aplicados

## Conteúdo

| Tópico                  | Descrição                                     |
| ----------------------- | --------------------------------------------- |
| Fundamentos             | O que é IA, ML, Deep Learning, LLMs           |
| LLM                     | Modelos de Linguagem em Larga Escala          |
| Engenharia de Prompts   | Conceitos, técnicas e frameworks de prompting |
| Agents                  | Padrões e frameworks de agentes de IA         |
| Recursos de Aprendizado | Cursos, livros, ferramentas e comunidades     |

## Estrutura do repositório

```
ai-labs/
├── notes/           → Anotações em Markdown puro (publicadas no site do Caramelo Labs)
├── sidebar.json     → Seções da barra lateral no site (opcional)
├── examples/        → Exemplos de código, exercícios e projetos práticos
│   ├── exercises.md → Exercícios propostos
│   └── projects.md  → Projetos práticos
└── LICENSE
```

Este repositório contém **apenas conteúdo** - não há build, dependências ou configuração de site. A estrutura web (Astro + Starlight) vive no repositório hub [labs](https://github.com/caramelotech/labs), que busca as notas daqui a cada atualização e publica o site.

## Escrevendo notas

As notas em `notes/` são Markdown puro, sem frontmatter:

- A primeira linha da nota deve ser o título: `# Título da Nota`
- Use prefixo numérico no nome do arquivo para controlar a ordem na barra lateral: `01-introducao.md`, `02-conceitos.md`
- Agrupe por tema em subpastas (`fundamentos/`, `llm/`, ...)
- Imagens ficam junto das notas (ex: `notes/fundamentos/assets/img.png`) e são referenciadas com caminho relativo: `![descrição](./assets/img.png)`

Ao criar uma nova subpasta de tema, adicione a seção correspondente em `sidebar.json`.

## Como usar

1. Comece pelas anotações em `notes/` (ou pelo [site](https://caramelotech.com.br/labs/ai/))
2. Explore os exemplos em `examples/`
3. Resolva os exercícios em `examples/exercises.md`
4. Construa os projetos em `examples/projects.md`

## Contribuição

Contribuições são bem-vindas! Veja o [Guia de Contribuição](.github/CONTRIBUTING.md) para detalhes.

- Melhorias nas anotações
- Novos exemplos práticos
- Exercícios adicionais
- Projetos aplicados

## Licença

MIT
