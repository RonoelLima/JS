const array = [1,2,3]
array.push(4)
array[0] = 'Luiz'
console.log(array)

// array = qualquercoisa irá gera um erro, pois não é permitido reatribuir um valor a uma constante

const nome = 'Ronoel'
const sobrenome = 'Lima'
const idade = 32

// Objeto literal
const pessoa = {
    nome: 'Ronoel',
    sobrenome: 'Lima',
    idade: '32'
};

console.log(`O seu nome é ${pessoa.nome + " " + pessoa.sobrenome} e tem idade ${pessoa.idade} anos `)

// criando um objeto através de uma função
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
console.log(pessoa1)

// criando um objeto através de uma função omitindo o valor da chave do objeto, caso as chaves sejam iguais aos parâmetros da função
function criaPessoa2 (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        nomeCompleto() {
            return `${this.nome + '' + this.sobrenome}`
        }
    }
}

const pessoa2 = criaPessoa('Carlos', 'Otávio', 24)
console.log(pessoa2)

criaPessoa2.nomeCompleto()

