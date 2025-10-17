📦 CardProduto React – CSS-in-JS

Uma aplicação React que demonstra o uso de Styled Components para refatorar estilos de componentes, com estilização dinâmica baseada em props.
Estilo moderno, minimalista e interativo, tipo loja digital profissional.

🎯 Objetivo

Refatorar os estilos de um componente React utilizando abordagens de CSS-in-JS (Styled Components ou Emotion), aplicando conceitos de:

Componentização

Estilização dinâmica

Reuso e organização de código

✨ Funcionalidades

Exibição de produtos com:

Nome do produto

Preço

Botão "Adicionar ao carrinho"

Botão muda de cor dinamicamente:

Verde (#198754) quando o produto foi adicionado

Cinza (#6c757d) quando não foi adicionado

Layout responsivo e centralizado na tela

Hover e animações suaves nos cards e botões

🧩 Tecnologias utilizadas

React + Vite

Styled Components (CSS-in-JS)

React Hooks (useState, useCallback)

PropTypes para validação de props

Flexbox e Gradientes para layout moderno

🗂 Estrutura do projeto
src/
├─ components/
│  ├─ CardProduto/
│  │  └─ CardProduto.jsx
│  └─ ProductList.jsx
├─ App.jsx
├─ index.jsx
└─ index.css

🚀 Como rodar localmente

Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd Card-Comp


Instale as dependências:

npm install


Rode o projeto:

npm run dev


Abra no navegador o endereço mostrado no terminal (geralmente http://localhost:5173)

💻 Demonstração

Produto com botão cinza:

Produto adicionado, botão verde:

Obs: substitua link-para-imagem1.png e link-para-imagem2.png pelas capturas de tela reais do seu projeto.

📝 Observações

Projeto totalmente em Styled Components, sem CSS externo.

Componentes separados e reutilizáveis.

Botões com feedback visual para melhorar a UX.