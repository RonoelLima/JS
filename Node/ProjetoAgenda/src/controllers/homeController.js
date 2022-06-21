const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  console.log(contatos)
  res.render('index', { 
    contatos: contatos 
  })
      
  }

exports.edit = async (req, res) => {
  if(!req.params.id) return res.render('404')
}