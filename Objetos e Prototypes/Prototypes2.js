// New Object - > Object.prototype
// const ObjA = {
//     chaveA: 'A'
//     //_proto_.prototype
// }

// const objB = {
//     chaveB: 'B'
// }

// const ObjC = new Object();
// ObjC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA)

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
// p1.desconto(100)
p1.aumento(100)
console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
}


Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p1)
console.log(p2)

const p3 = Object.create(Object.prototype)
p3.preco = 113;
console.log(p3)