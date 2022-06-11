const pessoa = {
    nome: 'Ronoel',
    sobrenome: 'Miranda',
    idade: '30',
    endereço: {
        rua : 'Caminho de Areia',
        numero: '320'
    }
}

console.log(pessoa.nome)
const { nome = 'Lucas', sobrenome, idade } = pessoa
console.log(nome, sobrenome, idade)

const { endereço: { rua, numero}} = pessoa// Desestruturação de um objeto dentro de outro objeto
console.log(rua, numero)


const {name, ...resto} = pessoa
console.log(name)