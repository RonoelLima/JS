// -----------------------------------------------------------//----------------------------------------------------

require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

// -----------------------------------------------------------//----------------------------------------------------

const helmet = require('helmet')
app.use(helmet())
// -----------------------------------------------------------//----------------------------------------------------
const csrf = require('csurf')
app.use(csrf());


// -----------------------------------------------------------//----------------------------------------------------

const { middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./middlewares/middlewares')
const mongoose = require('mongoose')

// -----------------------------------------------------------//----------------------------------------------------
//Conexão com a base de dados
mongoose.connect(process.env.URL, {
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Conexão feita com sucesso!')
        app.emit('pronto!')
    })
    .catch(err=> console.log(err))
// -----------------------------------------------------------//----------------------------------------------------
//configurando as sessions para salvar dados na memória
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const sessionOptions = session({
    secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
    store: MongoStore.create({ mongoUrl: process.env.URL }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
  });
app.use(sessionOptions);
app.use(flash())

// -----------------------------------------------------------//----------------------------------------------------

//informa ao express que ele vai receber dados através do body da requisição
app.use(express.urlencoded({ extended: true }))

// -----------------------------------------------------------//----------------------------------------------------

//Pasta de conteudo estático
app.use(express.static(path.resolve(__dirname, 'public')))

// -----------------------------------------------------------//----------------------------------------------------

// passando um middle global para todas as requisições

app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)


// -----------------------------------------------------------//----------------------------------------------------

//configuração para utilizar o ejs
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejx')

// -----------------------------------------------------------//----------------------------------------------------


const Port = 3000

// -----------------------------------------------------------//----------------------------------------------------


app.on('pronto!', () => {
    // inicializando o servidor
    app.listen(Port, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log(`Servidor rodando na porta ${Port}`)
})
})

// -----------------------------------------------------------//----------------------------------------------------
