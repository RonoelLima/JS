const produto = {
    nome: 'Caneca' , preco: '1.8'
}

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Valor Alterado'
})    

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.nome = 'Outra coisa'
console.log(produto)
delete produto.nome

console.log(Object.values(produto))

for( let entry of Object.entries(produto)) {
    console.log(entry)
}

    // // cópia do objeto produto
// const outraCoisa = produto;
// console.log(outraCoisa);
// produto.nome = 'Luiz Otávio'
// outraCoisa.preco = 2.5
// console.log(outraCoisa);
// console.log(produto)

//Usando o spread operator para copiar o objeto original
// outraCoisa = {...produto,
// material : 'porcelana'}

// console.log(outraCoisa)


//cópia utilizando object.

// const caneca = Object.assign({}, produto)
// console.log(caneca)

//retorna um array com as chaves
// console.log(Object.keys(produto))
//Congelando o objeto para não poder ser alterado
// Object.freeze(produto)



