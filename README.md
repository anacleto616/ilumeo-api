# ⚛️ Desafio Ilumeo

## 🚀 Principais tecnologias utilizadas

- Node.js
- Typescript
- Express.js
- Prisma
- Docker-compose

## ⚙️ Como executar o projeto

- Instalar o Node.js na sua máquina: `https://nodejs.org/en/`
- Instalar o Docker: `https://docs.docker.com/engine/install/`
- Abra o terminal e clone o projeto numa pasta de sua preferência: `git clone https://github.com/anacleto616/ilumeo-api.git`
- Entre na pasta ilumeo-api com: `cd ilumeo-api`
- Digite o comando: `npm install`, para instalar as dependências do projeto
- Digite o comando do docker compose para iniciar o banco de dados: `docker compose up -d`
- Crie um arquivo `.env` na raiz do projeto inserindo o seguinte conteúdo:
  - DATABASE_URL="postgresql://ilumeo:ilumeopass@localhost:5432/ilumeo-db?schema=public"
  - API_PORT=3333
- Digite o comando: `npx prisma db push`, para fazer o push do banco de dados
- Digite o comando: `npx prisma db pull`, para fazer o pull do banco de dados
- Digite o comando: `npx prisma db seed`, para fazer o seed do banco de dados
- Execute a aplicação com o comando: `npm run dev`, estará rodando no endereço: `http://localhost:3333`

## Deploy
  - Deploy da aplicação feito na plataforma render, hospedado no link: https://ilumeo-api-pl35.onrender.com
  - Banco de dados também hospedado na plataforma render
