# AGENTS.md

Orientações especializadas para agentes de IA trabalhando com este repositório de documentação.

## Contexto do Projeto

Este é um site de documentação sobre **Inteligência Artificial** (AI Labs) construído com:

- **Framework:** Astro Starlight
- **Conteúdo:** 100% em `src/content/docs/` em português brasileiro
- **Deploy:** GitHub Pages (automático no merge para `main`)
- **Principais seções:** fundamentos, LLM, engenharia-de-prompt, agents, eventos

Veja [CLAUDE.md](CLAUDE.md) para detalhes completos de arquitetura e configuração.

## Tarefas Comuns

### Adicionar uma nova página de documentação

1. **Escolha o local:** Decida se vai em `fundamentos/`, `llm/`, `engenharia-de-prompt/`, `agents/`, ou `full-cycle-IA-tech-week/`
2. **Determine o `sidebar.order`:**
   - Procure o número mais alto atualmente em uso (ver todas as páginas em `src/content/docs/`)
   - Atribua o próximo número em sequência
   - Exemplo: se a última ordem é 12, use 13 para a nova página
3. **Crie o arquivo** com frontmatter completo:
   ```yaml
   ---
   title: "Título da Página"
   description: "Descrição concisa"
   lastUpdated: 2026-04-27
   sidebar:
     order: 13
   tags: ["tag1", "tag2"]
   ---
   ```
4. **Escreva o conteúdo** em Markdown (com suporte a componentes MDX se necessário)

### Atualizar página existente

- Sempre atualize o campo `lastUpdated` com a data atual
- Mantenha o `sidebar.order` igual (não reordenar)
- Se for renomear: crie nova página com novo `order`, marque a antiga como deprecated

### Criar nova seção top-level

1. Crie diretório em `src/content/docs/nova-secao/`
2. Crie `src/content/docs/nova-secao/index.md` como página raiz
3. Atualize `astro.config.mjs`:
   ```javascript
   {
     label: "Rótulo da Seção",
     autogenerate: { directory: "nova-secao" },
   }
   ```
4. Atribua `sidebar.order` começando do próximo número disponível globalmente

## Regras de Conteúdo

### Formatação Markdown

- Use **hífens (-)** não travessões (—)
- NÃO use `---` para separar seções (apenas para notas/atribuições no final)
- Assets estáticos em `public/assets/` são referenciados como `/ai-labs/assets/nome-arquivo.ext`

### Frontmatter Obrigatório

Sempre preencha:

- `title` - Título da página (obrigatório)
- `description` - Uma linha descritiva (obrigatório)
- `lastUpdated` - Data no formato YYYY-MM-DD (obrigatório)
- `sidebar.order` - Número sequencial global (obrigatório)
- `tags` - Array de strings opcionais para categorização

## Pensando sobre `sidebar.order`

**Ponto crítico:** O `sidebar.order` é **global e sequencial** em todos os arquivos.

```
fundamentos/01-intro.md           → order: 1
fundamentos/02-ml.md              → order: 2
fundamentos/03-deep-learning.md   → order: 3
llm/index.md                       → order: 4
llm/transformers.md               → order: 5
engenharia-de-prompt/01-prompt.md → order: 6
... e assim por diante
```

Quando adicionar uma página:

1. Scan rápido em todos os arquivos para achar o maior `order`
2. Use `maior + 1`
3. Não há reordenação de páginas existentes - apenas novas assumem o próximo número

## Exemplo: Adicionando Página

Adicionar artigo "Redes Neurais Convolucionais" em `fundamentos/`:

```yaml
---
title: "Redes Neurais Convolucionais"
description: "Entender arquitetura CNN e aplicações em visão computacional"
lastUpdated: 2026-04-27
sidebar:
  order: 25
tags: ["deep-learning", "cnn", "visão-computacional"]
---
# Redes Neurais Convolucionais (CNN)

Conteúdo aqui...
```

**Nota:** O `order: 25` é exemplo - você deve verificar o número atual maior usado.

## Git Conventions

- **NUNCA** fazer `git commit` ou `git push` automaticamente
- Apenas executar comandos git quando explicitamente solicitado pelo usuário
- Comunicar claramente o que será commitado antes de executar

## Comandos Essenciais

```bash
npm run dev      # Desenvolvimento com hot-reload
npm run build    # Build para produção
npm run preview  # Preview do build produção
```

## Estrutura de Diretórios

```
src/content/docs/
├── fundamentos/           # Conceitos básicos de IA
├── llm/                   # Modelos de linguagem
├── engenharia-de-prompt/  # Técnicas de prompting
├── agents/                # Padrões de agentes
├── full-cycle-IA-tech-week/  # Conteúdo do evento
├── index.mdx              # Página inicial
├── 404.md                 # Página não encontrada
└── recursos.md            # Page standalone
```

## Troubleshooting

**Problema:** Página não aparece na sidebar

- Verificar se tem `sidebar.order` definido
- Verificar se arquivo está em subdiretório com `autogenerate` no config

**Problema:** Sidebar order duplicado

- Agentes devem detectar e usar número novo (maior + 1)
- Se houver conflito, comunicar ao usuário antes de fazer mudança

**Problema:** Assets não carregam

- Assets devem estar em `public/assets/`
- Referência deve ser `/ai-labs/assets/nome-arquivo.ext` (com base `/ai-labs`)

---

Para informações adicionais, ver [CLAUDE.md](CLAUDE.md).
