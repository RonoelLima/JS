// const frutas = ['Pera', 'Maça', 'Uva'];

// // for (let i = 0; i < this.length; i++){
// //     console.log(frutas[i])
// // }


// // Realiza a leitura dos indices de um array ou chaves de um objeto
// for (let i in frutas) {
//     console.log(frutas[i])
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: '30'
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// console.log(pessoa.nome)
// console.log(pessoa['nome'])