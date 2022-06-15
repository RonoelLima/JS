//Classes
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} esta falando.`)    
    }

    comer(){
        console.log(`${this.nome} esta comendo.`)
    }

    beber(){    
        console.log(`${this.nome} esta bebendo.`)
    }
}


//Função Construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Ronoel' , 'Lima')
const p2 = new Pessoa('Ronoel', 'Lima')
console.log(p1)
console.log(p2)