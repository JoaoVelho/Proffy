<h3 align="center">

Proffy é um projeto desenvolvido na **Next Level Week** da **[Rocketseat][rocketseat_site]** utilizando as tecnologias ***TypeScript, Node, React e React Native***.

</h3>

![Banner](https://github.com/JoaoVelho/Proffy/blob/master/github-assets/banner.png)

<div align="center">

![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![NodeJS_Badge][server_nodejs_badge]
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

</div>

## **:books: SOBRE**
O **Proffy** é uma aplicação Web e Mobile desenvolvida com o objetivo de facilitar o contato entre alunos e professores.

## **:computer: TECNOLOGIAS**


#### **Website** ([React][react] + [TypeScript][typescript])

  - **[React Router Dom][react_router_dom]**
  - **[Axios][axios]**

  \* Veja o arquivo <kbd>[package.json](web/package.json)</kbd>

#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[PostgreSQL][postgres]**
  - **[ts-node-dev][tsnodedev]**

  \* Veja o arquivo <kbd>[package.json](server/package.json)</kbd>

#### **Mobile** ([React Native][react_native] + [TypeScript][typescript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[React Navigation][react_navigation]**
  - **[Axios][axios]**

  \* Veja o arquivo <kbd>[package.json](mobile/package.json)</kbd>

#### **Utilitários**

- Teste de API: **[Insomnia][insomnia]**
- Fontes: **[Archivo][font_archivo]**, **[Poppins][font_poppins]**


## **:rocket: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Você pode optar também por utilizar o gerenciador de pacotes **yarn** no lugar do **npm**.

Após ter o **Node** instalado, instale o **Expo** de forma global, utilizando o comando:

```sh
# Expo (React Native):
$ npm install -g expo-cli 
```

Instale as dependências contidas nos arquivos `package.json` que se encontram no diretório do **server**, no diretório do **web** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do server:
$ cd ./server
$ npm install

# Instalando as dependências do website:
$ cd ./web
$ npm install

# Instalando as dependências do mobile:
$ cd ./mobile
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[server](server/package.json)</kbd>, <kbd>[web](web/package.json)</kbd> e <kbd>[mobile](mobile/package.json)</kbd>.

### Utilizando o Server

```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./server

# Executando a aplicação em modo de desenvolvimento:
$ npm start

# Instanciando o banco de dados:
$ npm run knex:migrate
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](server/package.json)</kbd> para saber quais scripts estão disponíveis.

### Utilizando o Website

```sh
# Abrindo o terminal no diretório do website:
$ cd ./web

# Executando o website no modo de desenvolvimento:
$ npm start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

### Utilizando o Mobile

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./mobile

# Executando o mobile no modo de desenvolvimento:
$ npm start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important

<!-- Techs -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[react_native]: http://www.reactnative.com/

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[knex]: http://knexjs.org/

[postgres]: https://www.postgresql.org/

[tsnodedev]: https://github.com/whitecolor/ts-node-dev

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[react_native_maps]: https://github.com/react-native-community/react-native-maps

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[font_poppins]: https://fonts.google.com/specimen/Poppins

[font_archivo]: https://fonts.google.com/specimen/Archivo

[font_awesome]: https://fontawesome.com/
 
