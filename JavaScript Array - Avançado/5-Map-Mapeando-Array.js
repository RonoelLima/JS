const numeros = [5, 50, 80, 1, 2, 3, 5, 8 ,7 ,11, 15, 22, 27 ]

console.log(numeros.map(valor => valor * 2 ))

const pessoas = [
    {nome: `Ronoel`, idade: 32},
    {nome: `Francisco`, idade: 32},
    {nome: `Gabriele`, idade: 32},
    {nome: `Pedro`, idade: 02},
    {nome: `Graziele`, idade: 55},
    {nome: `Lima`, idade: 15},
]

const nomes = pessoas.map(element => element.nome)
const idade = pessoas.map( element => ({idade: element.idade}))

//console.log((pessoas.map(pessoa=> pessoa.nome)).filter((element) => element.nome === `Ronoel`))

const comIds = pessoas.map((element, indice) => {
    const newObj = {...element}
    newObj.id = (indice + 1) * 1000;
    return obj
})

console.log(pessoas)
console.log(comIds)