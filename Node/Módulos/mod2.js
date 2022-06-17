//importação de módulos criados pelo usuário
const { nome, sobrenome, falaNome } = require('./mod1')
const { Pessoa } = require('./mod3')

//importação de uma blibioteca de terceiros instalada pelo npm
const axios = require('axios')

// importação de módulos internos do Node
const path = require('path')

falaNome()

const p1 = new Pessoa('Ronoel')
console.log(p1)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))