//./ acessa a pasta a frente
// ../ volta uma pasta para fora

const { soma, mult } = require('../mod4')

console.log(soma(2,2))
console.log(mult(2,10))

const path = require('path')

// as aspas com .. dentro faz voltar um pasta a cada aspa digitada
console.log(path.resolve(__dirname, '..','..', 'arquivos', 'imagens'))

//
console.log(__filename)

// caminho do diretório/pasta atual onde o dirname está sendo executado
console.log(__dirname)