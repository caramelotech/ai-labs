# CLAUDE.md

Orientações para agentes de IA que trabalham neste repositório.

## Comandos

```bash
npm run dev      # servidor local em localhost:4321
npm run build    # build de produção (saída em dist/)
npm run preview  # preview do build localmente
```

Não há scripts de testes ou linting.

## Arquitetura

Site de documentação [Astro Starlight](https://starlight.astro.build/) implementado com:
- **Conteúdo:** Completamente em `src/content/docs/` - cada arquivo `.md`/`.mdx` vira uma página
- **Barra lateral:** Auto-gerada a partir da estrutura de diretórios com labels e ordem configurados em `astro.config.mjs`
- **Deploy:** GitHub Pages em `https://caramelotech.github.io/ai-labs` (automático no merge para `main`)
- **Idioma:** Português brasileiro (`pt-BR`)

**Estrutura da barra lateral** (definida em `astro.config.mjs`):
- `fundamentos/` - Fundamentos de IA: ML, Deep Learning, LLMs, tokens
- `llm/` - Modelos de Linguagem Grande
- `engenharia-de-prompt/` - Técnicas de Engenharia de Prompts
- `agents/` - Padrões e frameworks de Agentes
- `full-cycle-IA-tech-week/` - Notas do evento
- `recursos.md` - Página standalone de recursos

**Schema de conteúdo** (`src/content/config.ts`): Estende o schema padrão do Starlight com campos opcionais:
- `tags` - array de strings para categorização
- `date` - data de publicação/atualização

**Assets estáticos:** Vão em `public/assets/` e são referenciados em markdown como `/ai-labs/assets/filename.ext`.

## Adicionando conteúdo

Todo arquivo `.md` **obrigatoriamente** precisa deste frontmatter:

```yaml
---
title: "Título"
description: "Descrição concisa de uma linha"
lastUpdated: 2026-01-01
sidebar:
  order: N
tags: ["tag1", "tag2"]
---
```

### Regra: `sidebar.order`

**`sidebar.order` é sequencial por diretório**, não global. A ordem entre seções já é controlada pelo array `sidebar` em `astro.config.mjs`. Dentro de cada pasta, numere os arquivos a partir de 1.

### Criando novos top-level sections

Para adicionar uma nova seção superior (p.ex., `nova-categoria/`):
1. Crie o diretório em `src/content/docs/nova-categoria/`
2. Adicione um arquivo `index.md` como página de destino
3. Adicione entrada `autogenerate` em `astro.config.mjs`:
   ```javascript
   {
     label: "Título da Seção",
     autogenerate: { directory: "nova-categoria" },
   }
   ```

## Convenções e preferências

- Usar hífens (-) em vez de travessões (—) em todos os textos
- Em Markdown, NÃO usar `---` para separar seções (exceto para notas/atribuições no final do arquivo)
- **Git:** Nunca fazer `git commit` ou `git push` automaticamente - apenas quando explicitamente solicitado

## Recursos úteis

- [Documentação Starlight](https://starlight.astro.build/)
- [Documentação Astro](https://docs.astro.build/)
- [Configuração Zod](https://zod.dev/) para schema de conteúdo
