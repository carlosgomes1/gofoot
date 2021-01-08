<div align="center" style="margin-bottom: 20px;">
<img alt="gobarber" src="https://github.com/carlosgomes1/gofoot/blob/master/web/src/assets/images/logo.png" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">
 
[![The MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](http://github.com/carlosgomes1/gofoot/LICENSE.md)
![GitHub last commit](https://img.shields.io/github/last-commit/carlosgomes1/gofoot?color=green&style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/carlosgomes1/gofoot?style=flat-square)

</div>
 
## :soccer: O projeto
 
Application to connect owners of soccer fields / courts in a simple and fast way, where an owner can register, register their courts and their respective responsible / contacts and the user view these blocks listed on a map on his mobile phone.
 
 
## :rocket: Technologies used 
 
Here are the technologies used in this project:
 
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [ExpressJS](http://expressjs.com/)
- [Expo](https://expo.io/)
- [JWT](https://jwt.io/)
- [Yup](https://github.com/jquense/yup#:~:text=Yup%20is%20a%20JavaScript%20schema%20builder%20for%20value,allow%20modeling%20complex%2C%20interdependent%20validations%2C%20or%20value%20transformations.)
- [Styled Components](https://styled-components.com/)
- [TypeORM](https://typeorm.io/#/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Leaflet](https://leafletjs.com/)
- [Axios](https://github.com/axios/axios)

## :thinking: How to contribute?
**Fork this repository**

```bash
# Clone your fork
$ git clone url-of-your-fork && cd gofoot

# Create a branch with your feature or bug fix
$ git checkout -b my-branch

# Commit your changes
$ git commit -m 'feature/bugfix: my amendments'

# Push to your branch
$ git push origin my-branch
```

After the merge of your pull request is done, you can delete your branch.
 
## :fire: Getting started
 
#### Cloning project
```sh
$ git clone https://github.com/carlosgomes1/gofoot.git
$ cd gofoot
```

#### Preparing the backend
```sh
$ cd backend
$ npm i
$ code .

# Create a file called ".env" at the root of the project and place the following information:
AUTH_SECRET=YOUR_RANDOM_SECRET
SERVER_PORT=3333

# Open the ormconfigtemplate.json file and change its name to ormconfig.json and exchange the information for your docker postgres image.

$ npm run dev:server
```

#### Web app
```sh
# Open a new terminal tab

$ cd web
$ npm i
$ yarn start
```

#### Mobile app
```sh
$ cd mobile

# Install the expo-cli
$ npm install -g expo-cli
$ npm i
$ expo start

# Install the EXPO app on your mobile phone and scan the QRcode
```
 
## Versioning
 
1.0.0.0
 
 
### Author
---
<div align="center">
<a href="https://github.com/carlosgomes1">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/48812516?s=460&u=6d479ef73b7e12218fde677f0bebedacba995a33&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Carlos Gomes</b></sub></a> <a href="https://github.com/carlosgomes1" title="Carlos">🚀</a>


Feito com ❤️ por Carlos Gomes 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Carlos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/carlosgomes11/)](https://www.linkedin.com/in/carlosgomes11/) 
[![Gmail Badge](https://img.shields.io/badge/-carlos_gomes.s@hotmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:carlos_gomes.s@hotmail.com)](mailto:carlos_gomes.s@hotmail.com)
</div>
