# Roadmap de Estudos em IA Aplicada

Trilha para sair de "como um LLM funciona" e chegar a agentes de IA rodando em produção. Cada etapa usa o que a anterior ensinou, então a ordem importa. Quando o lab já tem nota sobre o assunto, ela aparece linkada logo abaixo da etapa. Os projetos no final servem para fixar o conteúdo na prática.

## 🧠 1. Como os LLMs funcionam por dentro

Antes de construir qualquer coisa, vale entender o que acontece entre o texto que você digita e a resposta que volta. Isso explica por que o modelo erra, esquece ou inventa.

- Tokens, embeddings e janela de contexto
- Arquitetura Transformer e mecanismo de atenção
- Geração de texto: previsão do próximo token, temperatura e amostragem
- Do modelo base ao assistente de chat (ajuste fino e alinhamento), o caminho que leva a produtos como o ChatGPT

No lab: [O que são LLMs](/labs/ai/llm/01-o-que-sao-llms/), [PLN](/labs/ai/llm/02-pln/), [Tokens em Modelos de Linguagem](/labs/ai/llm/03-tokens/)

## ✍️ 2. Engenharia de prompts

- Estrutura de um bom prompt: papel, contexto, tarefa e formato de saída
- Técnicas como few-shot, chain-of-thought e prompt de sistema
- Saída estruturada (JSON) para integrar o modelo ao código
- Boas práticas e riscos, como prompt injection

No lab: [Engenharia de Prompts](/labs/ai/engenharia-de-prompt/01-engenharia-de-prompts/), [Boas Práticas e Segurança em Prompt Engineering](/labs/ai/engenharia-de-prompt/02-boas-praticas-e-seguranca/)

## 🔌 3. Consumindo LLMs por API

Os conceitos valem para qualquer provedor (OpenAI, Google, Anthropic). O hands-on do lab usa a API do Gemini, e a API da OpenAI é um bom segundo exemplo para comparar.

- Enviar mensagens ao modelo: papéis de sistema, usuário e assistente
- Parâmetros que mudam o comportamento, como temperature e limite de tokens
- Streaming de respostas
- Tool calling (function calling)
- Custo por token, limites de uso e proteção da chave de API

No lab: [Uso de Ferramentas](/labs/ai/agents/03-ferramentas/), [Hands-on: Agente "SecretarIA"](/labs/ai/agents/05-hands-on-secretaria/)

## 🤗 4. Modelos abertos e o ecossistema Hugging Face

- Hugging Face: Hub de modelos e datasets, biblioteca Transformers e Spaces
- Modelos de imagem e áudio: geração e classificação de imagens, reconhecimento de fala (speech-to-text) e síntese de voz (text-to-speech)
- LLMs de código aberto: rodar na própria máquina e servir como um serviço na nuvem
- Modelo aberto ou API paga: como decidir com base em custo, privacidade, controle e qualidade

## 🔗 5. Aplicações com LangChain

- Componentes básicos: modelos, prompt templates, output parsers e o encadeamento de etapas
- Memória de conversa
- RAG na prática: carregar documentos, dividir em chunks, gerar embeddings, guardar num banco vetorial e recuperar
- Quando o LangChain compensa e quando o loop escrito na mão basta

No lab: [Frameworks de Agentes](/labs/ai/agents/09-frameworks/), [Context Engineering e RAG](/labs/ai/llm/04-context-engineering-e-rag/), [Arquiteturas de RAG](/labs/ai/llm/05-arquiteturas-de-rag/), [Pipeline de RAG em Produção](/labs/ai/llm/07-pipeline-de-rag-em-producao/)

## 🤖 6. Agentes de IA em Python

- O loop de raciocínio e ação (ReAct)
- Ferramentas customizadas que o agente decide quando chamar
- Memória de curto e longo prazo
- Agentes com LangChain, que hoje rodam sobre o LangGraph por baixo dos panos
- Workflow ou agente: quando cada um faz sentido

No lab: [O que são agentes de IA](/labs/ai/agents/01-o-que-e/), [Paradigma ReAct](/labs/ai/agents/02-react/), [Memória de Agentes](/labs/ai/agents/04-memoria/), [Workflow ou Agente?](/labs/ai/agents/11-workflow-ou-agente/), [Padrões de execução de agentes](/labs/ai/agents/12-padroes-de-execucao/)

## 🧩 7. MCP: conectando a IA a ferramentas e dados

- O que é o Model Context Protocol e como ele se diferencia de uma API
- Criar um servidor MCP em Python expondo tools, resources e prompts
- Conectar o servidor a um cliente de IA (host), como um editor ou um agente próprio

No lab: [Model Context Protocol (MCP)](/labs/ai/agents/06-mcp/), [MCP, RAG e Agentes: quem faz o quê](/labs/ai/agents/07-mcp-rag-e-agentes/), [Agent Skills](/labs/ai/agents/08-agent-skills/)

## 👥 8. Sistemas multiagentes e deploy

- Multiagentes: papéis, tarefas e delegação entre agentes
- CrewAI: agentes, tarefas e crews (times de agentes) para montar um fluxo multiagente com pouco código
- Agno: framework Python para agentes com ferramentas, memória, base de conhecimento e times
- Deploy: colocar um agente ou uma crew no ar, com variáveis de ambiente, observabilidade e custo sob controle

No lab: [Sistemas Multi-Agentes](/labs/ai/agents/10-multi-agents/), [Frameworks de Agentes](/labs/ai/agents/09-frameworks/), [Agentes em Produção](/labs/ai/agents/13-agentes-em-producao/)

## ⌨️ 9. IDE com IA para programar mais rápido

Não depende das etapas anteriores, dá para estudar em paralelo desde o começo.

- Editores com IA integrada (o Cursor é o exemplo mais conhecido): autocomplete, chat com o código, edição em vários arquivos e agentes de código
- Regras de projeto e contexto para guiar o assistente
- Revisão do código gerado antes de aceitar

No lab: [IA no Desenvolvimento de Software](/labs/ai/fundamentos/05-ia-no-desenvolvimento-de-software/)

## 🚀 Projetos

Os projetos estão agrupados por nível, e cada nível indica as etapas que você precisa ter feito antes. Os nomes descrevem a técnica por trás em vez do produto final, então dá para trocar o tema (nutrição, currículos, filmes) sem mudar a arquitetura.

### Nível 1: depois das etapas 1 a 3

**Chatbot com persona e memória de conversa.** Interface de chat que fala com um LLM por API, com prompt de sistema definindo a persona, histórico reenviado a cada turno e resposta em streaming. É o esqueleto que os outros projetos reaproveitam.

**Resumidor de reuniões com transcrição e LLM.** Transcreve o áudio de uma reunião com um modelo de fala para texto (como o Whisper) e usa um LLM para gerar ata, decisões e itens de ação.

**Analisador de currículos com extração estruturada.** Lê currículos em PDF, extrai experiência, habilidades e formação em JSON validado por schema e compara com os requisitos de uma vaga, devolvendo uma nota com justificativa.

### Nível 2: depois das etapas 4 a 6

**Chat com LLM de código aberto rodando localmente.** Baixa um modelo aberto (como o DeepSeek), roda na própria máquina com um runtime local (como o Ollama), monta uma interface web de chat e a publica por um túnel ou na nuvem. Se o endereço ficar público, coloque autenticação e limite de uso.

**Leitor de PDFs com RAG e citação de página.** Carrega um PDF, divide em chunks guardando o número da página, gera embeddings, indexa num banco vetorial e responde às perguntas citando a página de onde veio cada trecho.

**Chat com bases de conhecimento próprias (RAG).** Indexa documentos de vários formatos (Markdown, texto, páginas web) e permite consultá-los em linguagem natural, com atenção à qualidade da recuperação: se o trecho certo não chega ao modelo, a resposta sai errada.

**Analisador de vídeos com transcrição e perguntas e respostas.** Pega a legenda ou a transcrição do áudio de um vídeo, divide em trechos, gera um resumo e responde perguntas sobre o conteúdo, usando LangChain e Python.

**Agente de análise de dados com Pandas e LLM.** Recebe perguntas em linguagem natural sobre uma planilha ou CSV, gera e executa código Pandas e devolve tabelas ou gráficos. O código escrito pelo modelo roda na sua máquina, então execute em ambiente isolado.

**Agente de recomendação com API externa.** Usa tool calling para consultar uma API de catálogo (como a TMDB, de filmes e séries), guarda as preferências do usuário na memória e recomenda títulos com base nelas.

**Bot de mensageria com LLM no Telegram.** Bot criado pela Bot API do Telegram que recebe mensagens e responde com um LLM configurado como nutricionista, podendo analisar fotos de refeições se o modelo for multimodal. As respostas são informativas e não substituem um profissional de saúde.

**Agente de curadoria de notícias.** Coleta feeds RSS e APIs de notícias, remove duplicadas, classifica por relevância para um perfil de interesse e gera um resumo diário no formato de newsletter.

### Nível 3: depois das etapas 6 a 8

**Agente de criação de conteúdo com RAG e web scraping.** Raspa páginas de referência, indexa o material num banco vetorial e gera rascunhos de artigos ou posts fundamentados nele, citando as fontes. Respeite o `robots.txt` e os termos de uso dos sites.

**Agente que navega na web com browser-use.** Usa a biblioteca open source browser-use para deixar um LLM controlar um navegador real (com Playwright por baixo) a partir de instruções em linguagem natural, sem depender de seletores CSS fixos. Serve para extrair dados de sites e preencher formulários.

**Agente de atendimento no WhatsApp com Agno.** Agente montado com o Agno, com base de conhecimento (FAQ da empresa), memória por cliente e ferramentas como consultar pedido ou abrir chamado. Conecta ao WhatsApp pela API oficial (WhatsApp Business Platform) por webhook e sabe quando passar a conversa para uma pessoa.

## Referências

- [LangChain Overview](https://docs.langchain.com/oss/python/langchain/overview) - LangChain (docs oficiais), en
- [CrewAI Documentation](https://docs.crewai.com) - CrewAI (docs oficiais), en
- [Agno Documentation](https://docs.agno.com) - Agno (docs oficiais), en
- [browser-use](https://github.com/browser-use/browser-use) - Browser Use (repositório oficial), en
- [Hugging Face Documentation](https://huggingface.co/docs) - Hugging Face (docs oficiais), en
- [OpenAI API Documentation](https://platform.openai.com/docs) - OpenAI (docs oficiais), en
- [Cursor Documentation](https://docs.cursor.com) - Cursor (docs oficiais), en
