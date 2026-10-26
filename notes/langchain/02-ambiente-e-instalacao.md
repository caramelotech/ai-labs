# Configurando o Ambiente do LangChain

## Pré-requisitos

Para seguir os exemplos desta seção você vai precisar de:

- Python 3.8 ou superior
- conhecimento básico de Python (funções, imports, um pouco de orientação a objetos)
- uma chave de API de pelo menos um provedor de LLM (a OpenAI é a mais usada nos exemplos, mas vale qualquer uma das cobertas em [Modelos e Provedores](/labs/ai/langchain/03-modelos-e-provedores/))
- um ambiente virtual (fortemente recomendado, veja o porquê abaixo)
- um editor de código (VS Code, PyCharm ou o que você já usa)

## Por que usar um ambiente virtual

Um ambiente virtual isola as dependências do projeto do resto do sistema. Sem isso, instalar o LangChain (e as dezenas de pacotes que ele puxa) polui o Python global da máquina, e dois projetos diferentes acabam brigando por versões incompatíveis da mesma biblioteca. Para um projeto com LangChain isso é ainda mais relevante, porque o ecossistema é dividido em vários pacotes (`langchain`, `langchain-openai`, `langchain-community`...) que evoluem em velocidades diferentes.

```bash
# criar o ambiente virtual
python -m venv langchain_env

# ativar no Windows
langchain_env\Scripts\activate

# ativar no Mac/Linux
source langchain_env/bin/activate
```

Com o ambiente ativado, o prompt do terminal costuma mostrar `(langchain_env)` na frente, confirmando que os pacotes instalados a seguir ficam isolados ali.

## Instalando o LangChain e os pacotes do ecossistema

O LangChain foi dividido em vários pacotes menores: um núcleo (`langchain`), integrações por provedor (`langchain-openai`, `langchain-anthropic`...) e um pacote de integrações mantidas pela comunidade (`langchain-community`). Essa separação existe para você instalar só o que vai usar, em vez de puxar o SDK de todo provedor possível.

```bash
# núcleo do LangChain
pip install langchain

# integrações mantidas pela comunidade (document loaders, vector stores etc.)
pip install langchain-community

# integração com a OpenAI
pip install langchain-openai

# pacotes usados ao longo desta seção
pip install python-dotenv    # carregar variáveis de ambiente do .env
pip install faiss-cpu        # vector store FAISS
pip install chromadb         # vector store Chroma
pip install tiktoken         # contagem de tokens
pip install pypdf            # leitura de PDF
```

Antes de rodar isso num projeto real, vale conferir a [documentação oficial de instalação](https://docs.langchain.com/oss/python/langchain/install), porque o conjunto exato de pacotes muda conforme o LangChain evolui.

## Configurando as chaves de API

Toda chamada a um provedor de LLM passa por uma chave de API. O cuidado básico, que vale para qualquer projeto e não só para LangChain, é nunca deixar essa chave escrita direto no código:

1. criar uma conta no provedor (ex: OpenAI) e gerar uma chave de API
2. guardar a chave numa variável de ambiente, nunca hard-coded
3. criar um arquivo `.env` na raiz do projeto com as chaves
4. adicionar `.env` ao `.gitignore`, para nunca acabar commitado

```
# .env
OPENAI_API_KEY=sua_chave_aqui
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=sua_chave_do_langsmith_aqui
```

A variável `LANGCHAIN_TRACING_V2` liga o rastreamento automático de execuções no LangSmith, a ferramenta de observabilidade do próprio LangChain, útil quando você precisa depurar uma chain ou agente que não está se comportando como esperado.

```python
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
```

## Verificando a instalação

Um teste rápido para confirmar que tudo está funcionando antes de montar algo mais elaborado:

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-3.5-turbo")
response = llm.invoke("Hello! LangChain is working.")
print(response.content)
```

Se isso retornar uma resposta sem erro, o ambiente está pronto para o resto desta seção.

## Estrutura de projeto

Não existe uma estrutura obrigatória, mas um layout simples como este cobre a maioria dos projetos pequenos e médios:

```
langchain-project/
|-- .env
|-- app.py
|-- requirements.txt
|-- data/
|   `-- sample.pdf
|-- notebooks/
|-- README.md
```

A pasta `data/` guarda os documentos que vão alimentar document loaders e pipelines de RAG (ver [RAG](/labs/ai/langchain/11-rag/)), e `notebooks/` é útil para testar chains e prompts de forma interativa antes de colocar no código final.

```
# requirements.txt
langchain
langchain-community
langchain-openai
python-dotenv
faiss-cpu
chromadb
pypdf
tiktoken
```

## Problemas comuns ao configurar o ambiente

| Problema                            | Solução                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| `ModuleNotFoundError`               | o pacote não foi instalado, ou foi instalado fora do ambiente virtual ativo                      |
| Chave de API inválida               | conferir a chave e se o `.env` está sendo carregado antes da chamada                             |
| Conflito de versões                 | usar versões compatíveis entre si ou recriar o ambiente virtual do zero                          |
| Erro de limite de taxa (rate limit) | reduzir o tamanho/frequência das requisições ou usar outro modelo                                |
| Erros de import                     | checar o caminho correto do import (o LangChain reorganiza módulos entre pacotes com frequência) |
| "Nada funciona"                     | confirmar que o ambiente virtual está ativado antes de rodar o código                            |

## Referências

- [Install](https://docs.langchain.com/oss/python/langchain/install) - LangChain, documentação oficial, en
