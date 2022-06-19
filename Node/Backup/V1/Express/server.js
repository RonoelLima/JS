const express = require('express')
const app = express()
const routes = require('./routes')


//informa ao express que ele vai receber dados através do body da requisição
app.use(express.urlencoded({ extended: true }))
app.use(routes)


const Port = 3003

// inicializando o servidor
app.listen(Port, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log(`Servidor rodando na porta ${Port}`)
})
















// http: //meusite.com/ <- GET -> acessando a página
//          Criar   ler   editar   apagar
// CRUD -> CREATE, READ, UPDATE, DELETE
//            POST    GET   PUT    DELETE

