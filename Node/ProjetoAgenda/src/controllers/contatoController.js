const Contato = require('../models/ContatoModel')

exports.index = function(req, res, next){
    res.render('contato')
}

exports.register = async function(req, res, next){
  try {
    const contato = new Contato(req.body)
    await contato.register()

    if(contato.errors.length > 0){
        req.flash('errors', contato.errors)
        req.session.save(()=> res.redirect('index'))
        return
    }

    req.flash('success', 'Contato registrado com sucesso');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))
    return;

  } catch (error) {
    
    console.log(error)
    return res.render('404')

  }
}