const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'})
}
    
// const path = require('path');
// const caminhoArquivo =  path.resolve(__dirname, '..', 'teste.txt')

// const pessoas = [
//     {nome: 'joão'},
//     {nome: 'Maria'},
//     {nome: 'Ronoel'},
//     {nome: 'Pedro'},
// ]

// convertendo um objeto javascript em arquivo JSON.
// const json = JSON.stringify(pessoas, '', 2)


// \n realiza a quebra de linha no arquivo txt criado
// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf8'})
// a flag a permite que você insira um novo dado sem apagar o dado inserido arteriormente


// função para escrever dados em um arquivo
