<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#funcionalidades-da-aplicação">Funcionalidades</a> •
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> • 
  <a href="#como-executar">Como Executar</a> • 
  <a href="#deploy">Deploy</a> 
</p>

## Projeto

https://user-images.githubusercontent.com/93055468/203994117-a2d873df-c91e-4f1c-b860-e553b8fc4f11.mov

## Sobre

O Ignite Shop é uma simulação de aplicação do tipo e-commerce para vendas de camisetas que foi integrada com a api de pagamentos do stripe.
Neste desafio foi implementado novas funcionalidades ao Ignite Shop desenvolvido no módulo 4 da trilha de Reactjs do Ignite, como adicionar item ao carrinho, salvar os itens adicionados e exibir no carrinho de compra mostrando a quantidade de itens e o valor total e enviar o carrinho para a rota de checkout do stripe.

---

## Funcionalidades da Aplicação

- [x] Listar produtos cadastrados no Stripe
- [x] Realizar compras com a API do Stripe
- [x] Adicionar item ao carrinho na página do produto.
- [x] Salvar todos os itens selecionados e exibir o número de itens no carrinho.
- [x] Enviar o carrinho para a rota de checkout.

---

## Tecnologias Utilizadas

Na construção do projeto foram utilizadas as seguintes ferramentas:

#### **Website**  ([Next](https://nextjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Stitches](https://stitches.dev/)** 
- **[Stripe](https://stripe.com/br)** 
- **[Embla-carousel](https://www.embla-carousel.com/)**
- **[Radix](https://www.radix-ui.com/)**
- **[Axios](https://axios-http.com/)**

---

## Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.   

Executando a Aplicação:

```sh
  # Clone este repositório
  $ git clone git@github.com:fabiomoura-m/ignite-shop-v2.0.git
  # Acesse a pasta do projeto em seu terminal
  $ cd ignite-shop-v2.0
  # Instalando as dependências do projeto.
  $ npm install
  # Inicie a aplicação web
  $ npm run dev
  # Para simular uma compra utilize o número de cartão abaixo
  $ 4242 4242 4242 4242
  # A data de vencimento e o código do cartão pode ser qualquer número.
```

---

## Deploy 

🚀 [ignite-shop](https://ignite-shop-v2-0.vercel.app/)
