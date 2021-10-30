# Desafio WedClub 2021

### Essa é uma aplicação CRUD básica que permite gerenciar uma lista de usuários, ou seja, é possível criar, ler, atualizar e deletar usuários.

---

## ATENÇÃO !!

> ## Essa aplicação opera somente em modo de DESENVOLVIMENTO. É preciso ter o [postgreSQL](https://www.postgresql.org/) e o [prisma](prisma.io) instalados em sua máquina local.

---

> Lembre-se de configurar corretamente sua variável de ambiente com `DATABASE_URL="postgresql://username:password@localhost:5432/db_name?schema=schema_name"`. Sendo `username` o usuário postgres, `password` sua respectiva senha, `db_name` o nome do banco de dados e `schema_name` o esquema (caso não tenha nenhum criado, ele usará `public` como padrão, então basta substituir `schema_name` por `public`)

---

> A partir de agora vamos usar o `yarn` para instalação de dependências do projeto. Caso não tenha instalado em sua máquina, consulte sua [documentação](https://yarnpkg.com/getting-started) para uma instalação apropriada

---

## Front-End

Clone esse repositório em sua máquina e execute os seguintes comandos:

```sh
cd client
```

```sh
yarn
```

```sh
yarn dev
```

A aplicação rodará em `http://localhost:3000` em modo de desenvolvimento

---

## Back-End

Para rodar a aplicação em modo de desenvolvimento, execute os seguintes comandos:

```sh
cd server
```

```sh
yarn
```

```sh
yarn dev
```

A aplicação rodará em `http://localhost:3001` em modo de desenvolvimento

## Considerações Finais

Agradeço pela oportunidade fantástica que me foi proporcionada pela equipe da [WedCub](https://wedclub.com.br/). Infelizmente, não pude concluir com perfeição a tarefa que me foi passada, pois além da falta de tempo, nesses últimos 3 dias, ainda tive de aprender TypeScript (não que isso tenha sido ruim, mas foi um desafio pra mim).
Dito isso, peço desculpas, pela falta de organização de uma estrutura adequada ao projeto, por não colocá-lo em produção e, principalmente, por não implementar nenhuma estilização básica.
