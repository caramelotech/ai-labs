# Guia de Contribuição

Obrigado por considerar contribuir para o AI4Beginners! 🎉

Este documento fornece diretrizes para contribuir com o projeto.

---

## 🤝 Como Contribuir

### Reportar Bugs ou Sugerir Melhorias

1. Verifique se já não existe uma issue sobre o assunto
2. Abra uma [nova issue](https://github.com/caramelotech/AI44beginners/issues/new)
3. Descreva claramente o problema ou sugestão
4. Adicione exemplos quando possível

### Adicionar Conteúdo

1. **Fork** o repositório
2. **Clone** seu fork localmente
3. Crie uma **branch** para sua contribuição:
   ```bash
   git checkout -b feature/meu-novo-conteudo
   ```

4. **Use o template** disponível em `.github/TEMPLATE.md`

5. **Adicione seu conteúdo** seguindo as diretrizes abaixo

6. **Commit** suas mudanças:
   ```bash
   git add .
   git commit -m "Adiciona conteúdo sobre [tópico]"
   ```

7. **Push** para seu fork:
   ```bash
   git push origin feature/meu-novo-conteudo
   ```

8. Abra um **Pull Request** descrevendo suas mudanças

---

## 📝 Diretrizes de Conteúdo

### Estrutura

- Use o [template oficial](.github/TEMPLATE.md) para novos artigos
- Mantenha a estrutura de pastas:
  - `docs/conteudo/` - Artigos e tutoriais
  - `docs/recursos/` - Listas de recursos, cursos, livros

### Estilo de Escrita

- **Linguagem clara e acessível:** Escreva para iniciantes
- **Exemplos práticos:** Sempre que possível, inclua exemplos
- **Analogias:** Use analogias do dia a dia para explicar conceitos complexos
- **Português brasileiro:** Use português correto e acessível
- **Formatação consistente:** Siga o padrão do template

### Boas Práticas

✅ **Faça:**
- Explicações claras e objetivas
- Use exemplos do mundo real
- Inclua referências e links para aprofundamento
- Adicione exercícios práticos quando apropriado
- Revise ortografia e gramática

❌ **Evite:**
- Jargão técnico sem explicação
- Conteúdo muito avançado sem contexto
- Plágio (sempre cite suas fontes)
- Links quebrados
- Conteúdo desatualizado

---

## 📚 Adicionando Recursos

Ao adicionar cursos, livros ou ferramentas em `docs/recursos/`:

1. **Verifique se já não está na lista**
2. **Adicione na categoria apropriada**
3. **Inclua:**
   - Nome do recurso
   - Link (quando disponível)
   - Nível (Iniciante/Intermediário/Avançado)
   - Idioma
   - Breve descrição
   - Se é gratuito ou pago

**Exemplo:**
```markdown
- **Nome do Curso** - [Plataforma]
  - **Nível:** Iniciante
  - **Idioma:** Português
  - **Link:** [URL]
  - **Descrição:** Breve descrição do que o curso oferece
  - **Gratuito/Pago:** Gratuito
```

---

## 🔍 Revisão de Pull Requests

Todos os PRs passam por revisão. Esperamos:

1. **Código limpo:** Markdown bem formatado
2. **Sem erros:** Ortografia e gramática corretas
3. **Links funcionais:** Todos os links devem funcionar
4. **Consistência:** Seguir o padrão estabelecido
5. **Relevância:** Conteúdo deve ser relevante para o público-alvo

---

## 📋 Checklist antes do PR

Antes de abrir um Pull Request, verifique:

- [ ] Usei o template apropriado
- [ ] Revisei ortografia e gramática
- [ ] Testei todos os links
- [ ] Adicionei exemplos práticos quando relevante
- [ ] O conteúdo está em português brasileiro
- [ ] Segui a estrutura de pastas
- [ ] Adicionei metadata no topo (data, nível, tempo de leitura)
- [ ] Inclui link de volta ao índice no final

---

## 🎨 Formatação Markdown

### Títulos
```markdown
# Título Principal (H1)
## Subtítulo (H2)
### Seção (H3)
```

### Ênfases
```markdown
**Negrito**
*Itálico*
> Citação
```

### Listas
```markdown
- Item 1
- Item 2
  - Subitem 2.1
  
1. Item numerado 1
2. Item numerado 2
```

### Links e Imagens
```markdown
[Texto do link](URL)
![Alt text da imagem](URL-da-imagem)
```

### Código
```markdown
`código inline`

```python
# Bloco de código
def hello():
    print("Hello, World!")
```
```

### Callouts/Notas
```markdown
> 💡 **Nota importante:** Texto da nota
```

### Detalhes/Acordeão
```markdown
<details>
<summary><strong>Pergunta?</strong></summary>

Resposta aqui.

</details>
```

---

## 🚀 Testando Localmente

Para testar o site localmente com Jekyll:

1. Instale Jekyll:
   ```bash
   gem install bundler jekyll
   ```

2. No diretório do projeto:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```

3. Acesse `http://localhost:4000`

---

## 📞 Dúvidas?

Se tiver dúvidas sobre como contribuir:

- Abra uma [issue](https://github.com/caramelotech/AI44beginners/issues) com a tag `question`
- Ou participe das [discussões](https://github.com/caramelotech/AI44beginners/discussions)

---

## 🙏 Obrigado!

Sua contribuição torna este projeto melhor para todos. Obrigado por dedicar seu tempo!

---

**Código de Conduta:** Ao contribuir, você concorda em manter um ambiente respeitoso e inclusivo para todos. Seja gentil, respeitoso e construtivo em todas as interações.
