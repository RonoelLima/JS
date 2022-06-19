const express = require('express')
const app = express()

//informa ao express que ele vai receber dados através do body da requisição
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('<form action="/" method="POST">Nome do Cliente: <input type="text"  name="nome"><button>Enviar</button></form>')
});

app.post('/', (req, res) => {
    console.log(req.body.nome)
    res.send(`O que você enviou foi ${req.body.nome}`)
})

// ao colocar : informamos que a rota vai receber parâmetros
// ao colocar uma interrogação informa-se que o parâmtro é opicional
// ao colocar dados na url após o sinal de interrogação exemplo ?nome=Ronoel&filho="PrdroLucas" os dados são acessados através da query
app.get('/teste/:id?/:usuario?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato')
})

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

