const HomeModel = require('../models/HomeModel')

//método para criar um dado no banco do mongo
HomeModel.create({
    titulo:'Um titulo de testes 2',
    descricao: 'Uma descricao de testes 2'
}).then((dados)=> console.log(dados)).catch((err)=> console.log(err))

//método para pesquisar todos os dados do model no banco
HomeModel.find()
.then((dados)=> console.log(dados))
.catch((err)=> console.log(err))

exports.paginaInicial = (req, res, next) => {
    // req.session.usuario = {nome: 'Ronoel', logado: true }
    req.flash('info', 'Hello World')
    console.log('respondendo o cliente')
    res.render('index.ejs', {
        titulo: 'Este será o titulo da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8 ]
    })
    next()
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de Post')
}

