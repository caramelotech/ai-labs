# Guia de Contribuição

Obrigado por querer contribuir com o AI Labs!

## O que pode ser contribuido

- Melhorias e correções nas anotações (`src/content/docs/`)
- Novos exemplos práticos em `examples/`
- Exercícios adicionais em `examples/exercises.md`
- Projetos práticos em `examples/projects.md`
- Recursos recomendados em `src/content/docs/recursos.md`

## Processo

1. Crie uma branch a partir de `main` seguindo o padrão:

   ```
   feature/descricao-curta
   fix/descricao-curta
   docs/descricao-curta
   ```

2. Faça commits atômicos com mensagens no padrão de Conventional Commits:

   ```
   feat: adicionar anotações sobre fine-tuning
   fix: corrigir exemplo de prompt Chain of Thought
   docs: melhorar introdução sobre LLMs
   ```

   Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`

3. Abra um Pull Request usando o template disponível e aguarde revisão.

4. Após aprovação, o merge será feito por um mantenedor.

## Padrões de conteúdo

### Anotações (`src/content/docs/`)

- Escreva em português
- Use títulos hierárquicos (`##`, `###`)
- Prefira exemplos curtos e diretos
- Inclua o "por quê", não apenas o "como"
- Nomeie os arquivos com prefixo numérico sequencial: `03-nome-do-topico.md`
- Adicione frontmatter Starlight em todos os arquivos:

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

- Atualize o README principal ao adicionar um novo tópico

### Exemplos (`examples/`)

- Um conceito por arquivo
- Inclua o modelo de IA recomendado para testar o exemplo
- Descreva o objetivo e o resultado esperado

### Exercícios (`examples/exercises.md`)

- Descreva claramente o objetivo
- Indique o nível de dificuldade (iniciante / intermediário / avançado)
- Inclua critérios de sucesso em formato de checklist

### Projetos (`examples/projects.md`)

- Descreva o objetivo e o contexto
- Liste os requisitos em formato de checklist
- Inclua ao menos um exemplo de entregável esperado

## Rodando o site localmente

```bash
npm install
npm run dev   # servidor em localhost:4321
```

## Dúvidas?

Abra uma issue com a tag `question`.
