# Video 1 - Rumo ao próximo nível

`https://www.youtube.com/watch?v=bqb0CwFZCls&feature=emb_title`

Ambiente: `https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a`

```bash
# Iniciar
yarn init -y

# Instalar o micro-framework express
yarn add express
yarn add @types/express -D
```

```bash
# Instalar typescript
yarn add typescript -D

# Inicializar typescript na aplicação
yarn tsc --init

# Converter o código para javscript
yarn add ts-node-dev -D

# em package.json
"scripts": {
  "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
},

# iniciar aplicação
yarn dev
```

# Video 2 - Banco de dados

`https://www.youtube.com/watch?v=8ogZq7YHB7A&feature=emb_title`

Utilizar o typeorm para conexão com o banco de dados `https://typeorm.io/#/`

```bash
# Instalar typeorm
yarn add typeorm reflect-metadata

# Utilizar o sqlite3
yarn add sqlite3
```

- Criar arquivo ormconfig.json

```bash
# Criar arquivo de migração
yarn typeorm migration:create -n CreateUsers

# Rodar todas as migrações
yarn typeorm migration:run

# Desfazer ultima migração
yarn typeorm migration:revert
```

Utilizar Beekeeper Studio para visualizar o banco de dados sqlite `https://www.beekeeperstudio.io`

```bash
# Criar uuid para id
yarn add uuid
yarn add @types/uuid -D
```

# Video 3 - Testando a nossa aplicação

`https://www.youtube.com/watch?v=jGHvrFiA0vQ&feature=emb_title`

- Criar pasta "repositories".

## Testes Automatizados

### Tipos de testes

1 - Testes unitários

2 - Teste de integração

-> request -> routes -> controller -> repository
<- repository <- controller <- response

3 - Ponta a ponta (E2E)

```bash
# Biblioteca de testes
yarn add jest @types/jest -D

# Criar arquivo de configuração do jest
yarn jest --init

# Responder:
Would you like to use Jest when running "test" script in "package.json"? -> yes
Would you like to use Typescript for the configuration file?-> yes
Choose the test environment that will be used for testing -> node
Do you want Jest to add coverage reports? -> no
Which provider should be used to instrument code for coverage? -> v8
Automatically clear mock calls and instances between every test? -> yes
# Configurar jest.config.ts

# Instalar ts-jest para trabalhar com typescript dentro de jest
yarn add ts-jest -D

# supertest - https://www.npmjs.com/package/supertest
yarn add supertest @types/supertest -D

# rodar test
yarn test
```

# Video 4 - Envio de e-mail

`https://www.youtube.com/watch?v=GjfKXHkdwxI&feature=emb_title`

```bash
# Biblioteca para envio de email - Nodemailer (https://nodemailer.com/about/),
# Utilizar Ethereal para visualizar layout do email https://ethereal.email
yarn add nodemailer
yarn add @types/nodemailer -D

# Customizzar layout do email - Handlebars (https://handlebarsjs.com)
yarn add handlebars
```

### Variaveis de ambiente

- Criar um arquivo .env
- Utilizar a variavel com `process.env.VARIABLE`

# Video 5 - Finalizando nossa api com validações

`https://www.youtube.com/watch?v=RWdVi9PaOFI&feature=emb_title`

```bash
# Biblioteca de validações
yarn add yup
```

```bash
# Biblioteca para o express lidar com erros
yarn add express-async-errors
```
