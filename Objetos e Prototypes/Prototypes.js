function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

//instância

//Método
Pessoa.prototype.estouAqui = 'Mensagem'
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Luiz', 'Gabriel')
const pessoa2 = new Pessoa('Maria', 'Gabriel')
const data = new Date()
console.log(pessoa2)
