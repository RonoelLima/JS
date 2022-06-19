const path = require('path')
// está função vai criar um arquivo chamado teste no mesmo diretório
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modulos/escrever')
const ler = require('./modulos/ler')

// const pessoas = [
//     {nome: 'joão'},
//     {nome: 'Maria'},
//     {nome: 'Ronoel'},
//     {nome: 'Pedro'},
// ];

// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
   const dados = await ler(caminho);
   renderizaDados(dados)
}


function renderizaDados(dados) {
    // o método JSON.parse converte um JSON para um objeto javascript
    dados = JSON.parse(dados)
    dados.forEach( elemento => console.log(elemento))

}

leArquivo(caminhoArquivo)
// const dadosArquivo = leArquivo(caminhoArquivo)
//     .then((dados)=> console.log(dados))
