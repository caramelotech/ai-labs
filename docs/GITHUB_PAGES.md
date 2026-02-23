# Como Habilitar o GitHub Pages

Este documento explica como habilitar o GitHub Pages para este repositório.

## Passos para Habilitar

1. **Acesse as Configurações do Repositório**
   - Vá para: `https://github.com/caramelotech/AI44beginners/settings/pages`
   - Ou navegue: Repositório → Settings → Pages (no menu lateral)

2. **Configure a Source (Fonte)**
   - Em "Build and deployment" → "Source"
   - Selecione: **GitHub Actions**
   - Isso usará o workflow `.github/workflows/jekyll.yml` para construir e publicar o site

3. **Aguarde o Deploy**
   - Vá para a aba "Actions" do repositório
   - Aguarde o workflow "Deploy Jekyll site to Pages" completar
   - Isso pode levar alguns minutos na primeira vez

4. **Acesse o Site**
   - Após o deploy, seu site estará disponível em:
   - `https://caramelotech.github.io/AI44beginners/`
   - O link também aparecerá na página de Settings → Pages

## Verificação

Para verificar se está funcionando:

1. Acesse `https://caramelotech.github.io/AI44beginners/`
2. Você deve ver a página inicial com o conteúdo do `index.md`
3. Navegue pelos links para testar se todas as páginas estão acessíveis

## Alternativa: Build via Branch

Se preferir não usar GitHub Actions:

1. **Configure a Source**
   - Selecione: **Deploy from a branch**
   - Branch: `main` (ou `gh-pages` se preferir)
   - Folder: `/ (root)`

2. **Jekyll Build Automático**
   - O GitHub Pages construirá automaticamente usando Jekyll
   - Não precisa do workflow `.github/workflows/jekyll.yml`

## Troubleshooting

### Site não está atualizando
- Aguarde alguns minutos após o commit
- Verifique a aba "Actions" por erros no build
- Limpe o cache do navegador

### Links quebrados
- Certifique-se que todos os links relativos estão corretos
- Use paths como `docs/conteudo/arquivo.md` em vez de `/docs/conteudo/arquivo.md`

### Tema não aplicado
- Verifique se `_config.yml` está na raiz do repositório
- Confirme que o tema está corretamente especificado

## Configurações Adicionais

### Custom Domain (Opcional)
1. Settings → Pages → Custom domain
2. Digite seu domínio (ex: `ai4beginners.com`)
3. Configure o DNS do seu domínio para apontar para o GitHub Pages

### Enforce HTTPS (Recomendado)
1. Settings → Pages
2. Marque a opção "Enforce HTTPS"

## Arquivos Importantes

- `_config.yml` - Configuração do Jekyll
- `index.md` - Página inicial do site
- `.github/workflows/jekyll.yml` - Workflow de deploy (se usar GitHub Actions)
- `docs/` - Diretório com conteúdo

## Mais Informações

- [Documentação oficial do GitHub Pages](https://docs.github.com/en/pages)
- [Documentação do Jekyll](https://jekyllrb.com/docs/)
- [Temas suportados](https://pages.github.com/themes/)
