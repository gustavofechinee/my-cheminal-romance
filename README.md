# My charminal romance

Jogo dress-up estatico em HTML, CSS e JavaScript, pronto para hospedar no GitHub Pages.

## O que precisa ir para o GitHub

- `index.html`
- `app.js`
- `styles.css`
- `assets/`
- `.nojekyll`
- `README.md`
- `.gitignore`
- `.gitattributes`

## O que nao precisa subir

Os arquivos temporarios e de validacao ja ficam fora do versionamento por `.gitignore`:

- `output/`
- `progress.md`
- pastas `tmp*`
- arquivos `tmp*.zip`

## Como rodar localmente

No PowerShell:

```powershell
cd "C:\Users\night\OneDrive\Documentos\jogo da maria"
py -m http.server 4173
```

Abra:

`http://127.0.0.1:4173/index.html`

## Como publicar no GitHub Pages

1. Crie o repositório no GitHub.
2. Envie os arquivos listados em "O que precisa ir para o GitHub".
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch principal e a pasta `/ (root)`.
6. Salve e aguarde o link do Pages.

## Creditos

- Character and clothing assets: MaelleMarylloup
- Decor icons: OpenMoji
