const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddlware(req, res, next){
    console.log('Passei no seu middleware.')
    next()
}

// Rotas da home
route.get('/', meuMiddlware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
