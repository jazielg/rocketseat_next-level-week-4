# Video 2 - Desvendando o Next.js

`https://www.youtube.com/watch?v=7ceWRavb6Ac&feature=emb_title`

```bash
# Criar projeto em Next.js
yarn create next-app moveit-next

# Colocar typescript no projeto
# 1. Renomear arquivos para .tsx
# 2. Instalar dependenciais do typescript
yarn add typescript @types/react @types/react-dom @types/node -D

# Iniciar aplicação
yarn dev
```

# Video 3 - Contexto e componentes

`https://www.youtube.com/watch?v=ArqCBqN7zzc&feature=emb_title`

# Video 4 - Melhorando a usabilidade da aplicação

`https://www.youtube.com/watch?v=gZA1IjCRF0c&feature=emb_title`

Notificações `https://developer.mozilla.org/pt-BR/docs/Web/API/Notification`

# Video 5 - Próximo nível com React

`https://www.youtube.com/watch?v=nId4TNW4tlI&feature=emb_title`

```bash
# Biblioteca para trabalhar com cookies
yarn add js-cookie
yarn add @types/js-cookie -D
```

## Deploy

Serviços para frontend

- [Netlify](https://www.netlify.com)
- [Vercel](https://vercel.com/)

```bash
# https://vercel.com/download
npm i -g vercel # recomendado utilizar npm

# Primeiro fazer o login
vercel login

# Dentro da pasta do projeto
vercel

> Set up and deploy? Y
> Link to existing project? N

# Primeiro deploy o projeto vai direto para url de produção,
# nos demais, ele cria um url para teste e não envia para produção,
# para enviar para produção, digitar:
vercel --prod
```

## Desafios

- Criar uma documentação no README para explicar e utilização da aplicação;

- Melhorar a estilização da aplicação com layout responsivo, utilização de PWA;

- Alterar as cores da aplicação, criar um tema dark.

### Desenvolver o próximo nível

`https://www.figma.com/file/qM1HJWQoVBWf3G3nz6WFl6/Move.it-2.0-(Copy)?node-id=160:2761`
