# 🤖 Aula 2 - Desenvolvimento de Agentes, RAG e Codificação Assistida

> Aqui a aula sai do conceito e entra no **como construir sistemas reais com IA**

[Aula 2](https://www.youtube.com/watch?v=7yGjbLQFzIo)

# 🧠 1. Paradigmas de desenvolvimento com IA

A aula apresenta **dois modos principais de desenvolvimento**

## 🔹 1. Desenvolvimento assistido e iterativo

📌 Modelo mais próximo do que usamos hoje (Copilot, ChatGPT)

### Características:

- Desenvolvimento em conjunto com IA
- Decisões tomadas iterativamente
- Alta granularidade (passo a passo)
- Dev "assiste" a IA codar
- Baixa paralelização

## 💡 Insight técnico

```text
Dev → Prompt → IA → Código → Feedback → Ajuste → (loop)
```

👉 Muito controle, pouca escala

## 🔹 2. Desenvolvimento paralelo (com agentes)

📌 Evolução natural

### Características:

- Execução simultânea de múltiplas tasks
- Agentes trabalhando em paralelo
- Observabilidade em tempo real (logs, commits)
- Ambientes isolados

## 🔥 Base estrutural: Git Worktree

A aula enfatiza MUITO isso:

> **Git Worktree é a base para desenvolvimento paralelo com agentes**

## 🧱 Como funciona

```text
repo (main)
 ├── repo (feature 1)
 ├── repo (feature 2)
 └── repo (feature 3)
```

👉 Cada agente trabalha em uma “cópia isolada”

## ⚠️ Regras importantes

- Uma branch não pode estar em uso em múltiplos worktrees
- Worktree cria relação explícita entre branches

## 💡 Insight avançado

Isso resolve:

- Concorrência entre agentes
- Isolamento de contexto
- Execução paralela real

# 🧠 2. Codificação assistida na prática

A aula mostra um ponto MUITO importante:

> IA não só escreve código - ela segue **regras estruturadas**

## 🧾 Exemplo real (extraído da aula)

```md
quero separar algumas regras do @CLAUDE.md, vamos criar claude rules.

questões dos controllers ficam em controllers.md e atingem somente os arquivos de controllers.
questões dos services ficam em services.md e atingem somente os arquivos de services.
questões de testes ficam em testing.md e atingem somente os arquivos de testes.

separamos as rules, mas mesmo assim quero manter no claude.md questões gerais, como o projeto é uma api rest e temos que seguir as boas práticas do rest e que toda funcionalidade deve ser testada e que devemos sempre trabalhar com modo strict do typescript

vamos melhorar as rules em @.claude/rules/testing.md

os testes de integração terão um sufixo \*.int.spec.ts".
a unidade dos testes de unidade é testar fazendo mocks quando a dependência é externa, como banco de dados, http e etc. qualquer outra estrutura pode ser declarada diretamente.
não há problemas ter testes de unidade e de integração de um artefato, pois, podemos testar coisas mais básicas na unidade e testar a integração com as dependências externas na integração.
os testes e2e testam o sistema de ponta a ponta. devemos preparar os dados do banco, realizar as chamadas necessárias e avaliar respostas http, status code, erro e dados recebidos.
os testes não devem ser apenas lineares, a ideia de criar os testes é para descobrir bugs, validar comportamentos, definir documentação de como as coisas funcionam e descobrir edge cases, por isso, precisamos segmentar cada teste, ou seja, cada teste devem validar um cenário por vez.
```

## 🧠 O que isso mostra?

- Prompt como **configuração de sistema**
- IA seguindo:
  - regras de arquitetura
  - padrões de teste
  - convenções

👉 Isso é **Context Engineering aplicado**

# 🧠 3. Gerenciamento de prompts em sistemas reais

A aula reforça:

> Prompt = artefato versionado

## 📌 Características

- Define comportamento do agente
- Impacta:
  - custo
  - latência
  - qualidade

## 🧩 Estrutura organizacional

- Prompts por domínio (controllers, services, tests)
- Regras globais + específicas
- Versionamento

## 🛠️ Ferramentas citadas

- LangSmith
- PromptLayer
- LangFuse

## 💡 Insight

Prompt deixa de ser texto → vira **configuração declarativa do sistema**

# 🧠 4. RAG (Retrieval-Augmented Generation)

## 📌 Definição prática

> Técnica para **injetar contexto dinâmico** na IA

## 🧩 Fontes de dados

- PDFs
- Web
- Google Docs
- Notion
- Banco de dados interno

## 🔄 Fluxo

```text
Pergunta → Busca (vector search) → Contexto → LLM → Resposta
```

## 💡 Por que isso importa?

Resolve:

- Falta de contexto
- Alucinação
- Desatualização

## ⚠️ Trade-offs

- Latência ↑
- Custo ↑
- Complexidade ↑

# 🧠 5. Agentes de IA (nível prático)

A aula conecta tudo:

> Agentes = Prompt + Contexto + Tools + Loop

## 🔄 Comportamento

- Recebe objetivo
- Planeja
- Executa ações
- Observa resultado
- Itera

## 🧠 Modelo mental

```text
Agent:
  Thought → Action → Observation → loop
```

👉 Mesmo padrão do ReAct da Aula 1

## 🛠️ O que agentes fazem na prática

- Criam código
- Abrem PRs
- Executam testes
- Corrigem bugs

# 🧠 6. Impacto no workflow de engenharia

A aula mostra uma mudança estrutural:

## 🔄 Antes

```text
Dev → Código → PR → Review → Deploy
```

## 🚀 Agora

```text
Dev → Orquestra agentes →
   agentes codam →
   agentes testam →
   agentes revisam →
   Dev valida →
   Deploy
```

## 💡 Insight

> Desenvolvimento vira um sistema distribuído de agentes

# 🧠 7. Ambientes e execução

## 📌 Tipos de ambiente

- Local
- Remoto
- GitHub (CI/CD)

## 🔥 Importante

- Agentes precisam de ambiente isolado
- Execução paralela exige separação clara

👉 novamente → **Git Worktree**

# 🧠 8. Observabilidade e controle

## 📌 Necessidades novas

- Logs de agentes
- Rastreamento de decisões
- Versionamento de contexto

## 💡 Insight

Debug agora inclui:

- Prompt
- Contexto
- Resposta

# 🧠 9. Conexão com Aula 1 (integração final)

A Aula 2 operacionaliza tudo:

| Aula 1              | Aula 2              |
| ------------------- | ------------------- |
| Prompt Engineering  | Prompts versionados |
| Context Engineering | RAG + rules         |
| ReAct               | Agentes reais       |
| IA como conceito    | IA como sistema     |

# 🚀 10. Síntese final (nível sênior)

## 🧠 O que você precisa dominar

- Prompt como código
- Contexto como arquitetura
- RAG como fonte de verdade
- Agentes como runtime

## 🔥 Novo modelo mental

```text
Sistema com IA:

Inputs →
Context Builder →
RAG →
Agent Loop →
Tools →
Output
```

## 💡 Frase-chave da aula

> “Você não desenvolve mais só software - você desenvolve sistemas que desenvolvem software.”

# 🧩 TL;DR prático

- Comece com assistido
- Evolua para agentes
- Use RAG para contexto
- Versione prompts
- Use worktrees para paralelismo
