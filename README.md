
<h1 align="center">
    Express Typescript Mongo API
</h1>
<p align="center">🚀 This is a boilerpleate project that contains structure to create an API backend using Node.js</p>

### 🛠 Stack

The following stack was used in this project:

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Pino](https://getpino.io/)
- [Jest](https://jestjs.io/pt-BR/)

### 🎲 Setup


# Install dependencies
```bash
$ npm install


# Create .env file
$ touch .env

# Define application port and Mongo connection URL to .env file
PORT=3000
MONGO_CONNECTION_STRING=mongodb://localhost:27017/test

# Run
$ npm run dev

# Test
$ npm run test
```

### 📁 Project Structure

```
src\
 |--common\         # Commong and util files and handlers
 |--config\         # Config files
 |--controllers\    # Route controllers (controller layer) 
 |--logger\         # Applicaton logger setup
 |--models\         # Mongoose models 
 |--repositories\   # Database access (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)  
 |--tests\          # Unit tests
|--app.js          # Express app
|--index.js        # App entry point
```

### Autor
---


 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/7197783?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Leonardo Thizon Waterkemper</b></sub>




[![Twitter Badge](https://img.shields.io/badge/-@leonardothizon-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/leonardothizon)](https://twitter.com/leonardothizon) [![Linkedin Badge](https://img.shields.io/badge/-Leonardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardothizon/)](https://www.linkedin.com/in/leonardothizon/)