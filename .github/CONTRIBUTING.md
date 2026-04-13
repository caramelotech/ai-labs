# Guia de Contribuição

Obrigado por querer contribuir com o AI Labs!

## O que pode ser contribuido

- Melhorias e correções nas anotações (`/notes`)
- Novos exemplos práticos em `/examples`
- Exercícios adicionais em `/exercicios`
- Projetos práticos em `/projetos`
- Recursos recomendados em `/recursos`

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

### Anotações (Markdown)

- Escreva em português
- Use títulos hierárquicos (`##`, `###`)
- Prefira exemplos curtos e diretos
- Inclua o "por quê", não apenas o "como"
- Use o template em `.github/TEMPLATE.md` para criar novos tópicos
- Nomeie os arquivos com prefixo numérico sequencial: `03-nome-do-topico.md`
- Atualize o README principal ao adicionar um novo tópico

### Exemplos (`/examples`)

- Um conceito por arquivo
- Inclua o modelo de IA recomendado para testar o exemplo
- Descreva o objetivo e o resultado esperado

### Exercícios (`/exercicios`)

- Descreva claramente o objetivo
- Indique o nível de dificuldade (iniciante / intermediário / avançado)
- Inclua critérios de sucesso em formato de checklist

### Projetos (`/projetos`)

- Descreva o objetivo e o contexto
- Liste os requisitos em formato de checklist
- Inclua ao menos um exemplo de entregável esperado

### Recursos (`/recursos`)

- Verifique se o recurso já não está na lista
- Adicione na categoria apropriada
- Inclua: nome, link, nível, idioma e breve descrição

## Dúvidas?

Abra uma issue com a tag `question`.
