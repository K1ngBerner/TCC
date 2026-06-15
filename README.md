# Sussurros do Folclore Portfolio

Site estático em React, Vite e TypeScript para apresentar o projeto acadêmico **Sussurros do Folclore** como peça de portfólio bilíngue.

## Executar localmente

```bash
npm install
npm run dev
```

O servidor local fica disponível em:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

Os arquivos finais são gerados em `dist/`.

## Publicar no Netlify

1. Envie o projeto para um repositório ou faça upload da pasta do projeto no Netlify.
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Não é necessário backend, variável de ambiente ou API.

## Arquivos anexados utilizados

- Logo oficial: `public/assets/logo/sussurros-logo.png`
- Pitch em vídeo: `https://www.youtube.com/watch?v=EGgUVjrqLt4`
- TCC em português, cópia web otimizada: `public/assets/docs/pt/TCC_parte_escrita.pdf`
- GDD em português, cópia web otimizada: `public/assets/docs/pt/GDD_Sussurros.pdf`
- TCC em inglês para portfólio, cópia web otimizada: `public/assets/docs/en/TCC_Written_EN.pdf`
- GDD em inglês para portfólio, cópia web otimizada: `public/assets/docs/en/GDD_Sussurros_EN.pdf`

## Integrações

- itch.io: embed oficial solicitado no briefing.
- Miro: iframe de visualização oficial com link de fallback para abrir em nova aba.
- GitHub API: nenhuma integração foi implementada.

## Limitações técnicas

- As versões em inglês dos PDFs são traduções de portfólio geradas a partir do texto extraível dos PDFs originais, com imagens extraídas e reinseridas em ordem de página quando possível. Os PDFs originais em português permanecem como documentos acadêmicos autoritativos.
- Os PDFs dentro de `public/assets/docs` foram otimizados para web e limite de upload do GitHub. Eles preservam a leitura visual, mas ficam rasterizados e podem não permitir seleção/pesquisa de texto. Os arquivos originais pesados não foram alterados fora do projeto.
- O embed do Miro pode ser bloqueado por políticas do próprio Miro ou do navegador; a seção inclui fallback textual e botão para abrir o board.
- O pitch é carregado por embed do YouTube apenas após o clique, evitando versionar arquivo de vídeo pesado no repositório.
