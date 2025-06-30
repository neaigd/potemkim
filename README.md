# potemkim

Este repositório contém o código-fonte de um site estático construído com **React**, **Vite** e **Tailwind CSS**, hospedado no **GitHub Pages**. O objetivo principal do site é apresentar um diálogo interativo sobre o conceito de "Compreensão Potemkin" em Modelos de Linguagem de Grande Porte (LLMs), complementado por informações sobre um vídeo e um artigo científico relacionados.

**Link para a página:** [https://neaigd.github.io/potemkim/](https://neaigd.github.io/potemkim/)

## Componentes do Projeto

### Estrutura Principal do Repositório

*   `.github/workflows/main.yml`: Configuração do GitHub Actions para automação do deploy no GitHub Pages.
*   `config.toml`: Arquivo de configuração geral do projeto (uso específico pode variar).

*   `favicon.ico`: Ícone da aba do navegador para o site.
*   `README.md`: Este arquivo, contendo a descrição do projeto.
*   `frontend/`: Diretório principal que contém toda a aplicação web React.
*   `venv/`: Ambiente virtual Python (sugere a possibilidade de scripts Python ou um backend, embora não diretamente parte da aplicação frontend).

### Aplicação Frontend (`frontend/`)

Esta é a parte central do projeto, desenvolvida em React.

*   `.gitignore`: Regras de ignorar arquivos para o Git, específicas do frontend.
*   `eslint.config.js`: Configuração do ESLint para padronização do código JavaScript/React.
*   `index.html`: O ponto de entrada principal da aplicação web.
*   `package.json` e `package-lock.json`: Gerenciamento de dependências e scripts do Node.js.
*   `postcss.config.cjs`: Configuração do PostCSS, utilizado pelo Tailwind CSS e Autoprefixer.
*   `tailwind.config.js`: Configuração do Tailwind CSS, incluindo os caminhos para os arquivos que utilizam classes Tailwind e a inclusão do plugin `@tailwindcss/typography`.
*   `vite.config.js`: Configuração do Vite, o bundler e servidor de desenvolvimento utilizado.
*   `dist/`: Diretório onde a aplicação é compilada para produção.
*   `node_modules/`: Dependências do Node.js instaladas.
*   `public/`: Contém ativos estáticos, como `vite.svg`.
*   `src/`: Código-fonte da aplicação React.
    *   `App.css`: Estilos CSS gerais para o componente principal da aplicação (atualmente minimizado para evitar conflitos).
    *   `App.jsx`: O componente React principal que orquestra o layout da página, exibe informações sobre o vídeo e o artigo, e renderiza os componentes de diálogo.
    *   `chat.md`: Arquivo Markdown que contém o conteúdo do diálogo entre os interlocutores.
    *   `DialogueTurn.jsx`: Componente React responsável por renderizar cada "turno" do diálogo, aplicando estilos condicionais (cores de fundo, padding) e a funcionalidade "Leia mais". Utiliza o plugin `@tailwindcss/typography` para estilizar o conteúdo Markdown.
    *   `index.css`: O arquivo CSS principal que importa as diretivas base, componentes e utilitários do Tailwind CSS.
    *   `main.jsx`: O ponto de entrada da aplicação React, responsável por renderizar o componente `App.jsx` no DOM.
    *   `assets/`: Contém ativos como `react.svg`.
    *   `data/chatContent.js`: Arquivo JavaScript que armazena dados estáticos para o vídeo, artigo e o conteúdo do diálogo.

---
<!-- trigger action -->

## Próximos Passos e Prioridades

Para garantir um desenvolvimento eficiente e organizado, as issues abertas no repositório serão abordadas na seguinte ordem lógica:

1.  **Organizar sessões da página (Issue #3)**
    *   **Justificativa:** Esta é a tarefa mais fundamental. Antes de refinar a aparência visual ou adicionar funcionalidades complexas, é essencial ter uma estrutura clara e bem definida para o conteúdo da página. Isso garante que o trabalho de design e desenvolvimento subsequente seja aplicado a uma base sólida e organizada, evitando retrabalho.

2.  **Melhorar esquema de cores e adicionar tema escuro (Issue #2)**
    *   **Justificativa:** Uma vez que as sessões da página estejam organizadas, faz sentido focar na melhoria do esquema de cores e na implementação do tema escuro. Essas são melhorias visuais que se beneficiam de uma estrutura de página já estabelecida, permitindo uma aplicação mais coesa e eficaz do design.

3.  **Implementa Página Interativa 'O Legado de Potemkin' com React, Tailwind e Animações (Issue #1)**
    *   **Justificativa:** Esta issue é o objetivo principal do projeto e é bastante abrangente. As issues #2 e #3 são, na verdade, sub-tarefas que contribuem para a conclusão desta issue maior. Ela deve permanecer aberta como o rastreador principal do progresso geral do projeto, mas o trabalho direto deve se concentrar nas tarefas mais granulares (como as issues #2 e #3) que a compõem.
