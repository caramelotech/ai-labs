---
title: "Dia 1 - Prompt e Context Engineering"
description: "Prompt Engineering, Context Engineering, o novo papel do desenvolvedor e pilares do desenvolvimento com IA."
lastUpdated: 2026-01-01
sidebar:
  order: 1
tags: ["prompt-engineering", "context-engineering", "agentes", "ia"]
---

A aula introduz um conceito forte:

> **Software está sendo construído em camadas - e estamos na camada de Application Development**

[Aula 1](https://www.youtube.com/watch?v=0zWnwnY0aUY)

## 🧱 Camadas apresentadas

### 🔴 Application Development _(onde estamos)_

- AI Interface
- Prompt Engineering
- Context Construction
- Evaluation

👉 Aqui o dev atua diretamente com IA no produto

### 🟠 Model Development

- Dataset engineering
- Training
- Fine-tuning
- Evaluation

👉 Responsável por criar/treinar modelos

### 🔵 Infrastructure

- Compute
- Serving
- Monitoring
- Data management

👉 Base que sustenta tudo

## 💡 Insight técnico

Você **não precisa treinar modelo**, mas precisa dominar:

- Prompt
- Contexto
- Avaliação

👉 Isso define o novo skillset do backend moderno

## 🤖 2. IA como projeto de software

A aula reforça:

> IA deixou de ser só ferramenta → virou **parte do produto**

### 📌 Mudança principal

- Apps tradicionais agora:
  - usam IA internamente (features inteligentes)
  - ou expõem IA como produto

### 🧠 Novo tipo de sistema

#### 1. Aplicações com IA embutida

- Ex: autocomplete, recomendação, análise

#### 2. Agentes de IA

- Sistemas autônomos que:
  - tomam decisão
  - executam ações
  - iteram

## 🛠️ 3. IA como ferramenta no desenvolvimento

A IA também atua no **processo de engenharia**

### 📌 Casos de uso (da aula)

- Análise de problemas e trade-offs
- Apoio à decisão técnica
- Code generation
- Code review
- Debugging
- Segurança

### 🔥 Evolução importante

A aula mostra que estamos indo para:

- **Codificação por agentes**
- **PRs gerados por IA**
- **Auto-correção de bugs**

### 🔄 Mudança no workflow

Antes:

```text
Dev → Código → Deploy
```

Agora:

```text
Dev → IA → Código → IA revisa → Deploy
```

## 👨‍💻 4. Novo papel do desenvolvedor

### 📌 Responsabilidades-chave

- Entendimento de domínio
- Arquitetura de soluções
- Integração de sistemas
- Especificação e validação
- Co-autoria com IA

### 💡 Insight forte

> O dev deixa de ser executor → vira **orquestrador**

## ⚠️ 5. Problemas novos trazidos pela IA

A aula lista desafios que **não existiam antes**

### 🧩 Engenharia de sistemas com IA

- Integração com LLMs (não é só SDK)
- Design de agentes
- Protocolos de comunicação

### ⚖️ Trade-offs críticos

- Latência
- Custo
- Qualidade

👉 Isso vira decisão arquitetural

### 🔐 Segurança (muito importante)

**Problemas novos:**

- Prompt Injection
- Jailbreaking
- Falta de guardrails

Exemplo citado:

> Fazer a IA ignorar instruções e responder algo indevido

## 🧠 6. Prompt Engineering (expandido com as imagens)

### 📌 Papel real para devs

A aula detalha onde prompts entram:

- Exploração
- Contextualização
- Planejamento
- Testes
- Refatoração
- Benchmarks
- PR / Code review

### 🧪 Tipos de prompting

#### 🔹 Zero-shot / One-shot / Few-shot

- Controle por exemplos

#### 🔹 Chain of Thought (CoT)

📌 Representação mostrada:

Sem CoT:

```text
Pergunta → Resposta direta → maior erro
```

Com CoT:

```text
Pergunta → decompor → raciocinar → validar → resposta melhor
```

#### 🔹 Tree of Thought (ToT)

- Explora múltiplos caminhos
- Descarta ruins
- Expande bons

👉 Similar a busca em árvore (AI search)

#### 🔹 ReAct

📌 Loop apresentado:

```text
Thought → Action → Observation → repetir
```

- Raciocina
- Executa ação (API, código)
- Observa resultado

👉 Base para agentes modernos

## 🧾 7. Regras de ouro de Prompt Engineering

Checklist direto da aula:

- Definir persona e escopo
- Objetivo claro
- Inputs mínimos e separados
- Formato de saída definido
- Critérios explícitos
- Tratar ambiguidade
- Incluir restrições

## 🗂️ 8. Gerenciamento de prompts (nível produção)

### 📌 Problema

Prompts viram **artefatos de software**

### 🧠 Soluções

- Versionamento
- Reuso
- Observabilidade

Ferramentas:

- Registry local
- Plataformas como LangSmith

## 🧠 9. Context Engineering (com diagrama da aula)

A imagem mostra claramente o que compõe o contexto:

### 🧩 Componentes

- RAG (docs + vector search)
- Prompt (system + few-shot)
- State / history
- Memory (persistência)
- Structured output (JSON/tools)

### ⚠️ Limitação crítica

> Context window é finita

👉 Isso força decisões:

- O que incluir?
- O que remover?
- O que resumir?

### 🧠 Tipos de informação no contexto

- O que saber
- Como agir
- O que já aconteceu
- O que lembrar
- Em qual formato responder

## 🧱 10. Arquitetura com IA (RAG + contexto)

### 📌 Estrutura moderna

```text
User → Backend →
   RAG →
   Context Builder →
   LLM →
   Output estruturado
```

### 💡 Insight

> Context Engineering = nova arquitetura de backend

## 🧠 11. Pilares do desenvolvimento com IA

A aula fecha com um modelo bem importante:

### 🧩 Pilares

- Ferramentas (IDEs, CLIs)
- Prompts
- Modelos / agentes
- Documentação
- Memória
- Ambientes (local, remoto, GitHub)
- MCP Servers
- Skills
- **Workflow (centro de tudo)**

### 🔥 Insight mais importante aqui

> Não é sobre ferramenta → é sobre **workflow integrado com IA**

## 🚀 12. Síntese final (nível sênior)

### 🧠 O que mudou de verdade

1. Código não é mais o centro
2. Prompt virou interface
3. Contexto virou arquitetura
4. IA virou runtime cognitivo

### 🧩 Novo stack mental

```text
Software tradicional:
  lógica + dados

Software com IA:
  contexto + instrução + validação
```

### 💡 Frase que resume a aula

> "Saber programar não é mais suficiente - você precisa saber estruturar contexto e orquestrar IA."
