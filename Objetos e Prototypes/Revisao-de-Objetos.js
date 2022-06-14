// Objeto Literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const chave = 'nome'

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa[chave])
console.log(pessoa['sobrenome'])

const pessoa1 = new Object()
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
}

console.log(pessoa1.falarNome())

const pessoa2 = {
    nome:'Luiz',
    sobrenome: 'Otavio'
}

console.log(pessoa1, pessoa2)

for (let chave in pessoa1) {
    console.log(chave)
}

// Factory Function
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto = function(){
           return `${this. nome} ${this. sobrenome}`
        }
    }
}

const p1 = criaPessoa('Ronoel', 'Francisco')
console.log(p1.nomeCompleto())

//Funções Construtoras

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this)
}

const p2 = new Pessoa('Luiz', 'Miranda')
console.log(p2)

