const express = require('express');
//Permite utilizar o método Router do express, a constante que recebe o método vai armazenar todas as rotas da aplicação
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')
// Rotas da home
route.get('/', homeController.paginaInicial );
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route