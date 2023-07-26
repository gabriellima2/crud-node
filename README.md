# Crud With NodeJS

Desenvolvi esse projeto para praticar a criação de APIs com NodeJS sem frameworks.

<h2>Ferramentas</h2>

- [NodeJS](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/web/javascript/guide/introduction)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [Docker](https://www.docker.com/)

<h2>Rodando o projeto</h2>

Primeiramente, é necessário que você tenha o [NodeJS](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados em sua máquina.

<h3>Passos iniciais:</h3>

```bash
- Salve o projeto na sua máquina e instale as dependências necessárias:

1. Clone o repositório:
$ git clone https://github.com/gabriellima2/crud-node.git

2. Acesse a pasta e instale as dependências via terminal:
$ npm i || yarn

3. Gere o cliente Prisma com o Schema já definido:
$ npx prisma generate
```

<h3>Finalmente, rodando o projeto</h3>

<h4>Com Gerenciadores de pacotes (NPM ou Yarn)</h4>

```bash
4. Inicie a aplicação em modo de desenvolvimento:
$ npm run dev || yarn dev

O servidor será aberto em localhost:3000
```

<h4>Com Docker</h4>

```bash
4. Crie a imagem:
$ docker build -t <nome-da-imagem> .

5. Crie e rode o container:
$ docker run -i -d --rm -v "$PWD:/usr/src/app" -p "3000:3000" <nome-da-imagem>

O servidor será aberto em localhost:3000
```

<h4>Com Docker Compose</h4>

```bash
4. Inicie a aplicação em modo de desenvolvimento:
$ docker-compose up

O servidor será aberto em localhost:3000
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
