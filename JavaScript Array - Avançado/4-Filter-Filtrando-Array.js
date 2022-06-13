//Filter, Map, Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8 ,7 ,11, 15, 22, 27 ]

const callbackFilter = (valor, indice, array) => {
    return valor > 10
}

const numerosFiltrados = numeros.filter( elemento => elemento > 10)

console.log(numerosFiltrados)

/*function filtro (numeros){
const newArray = []
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0) return newAraay.push(numeros[i]).sort()
    console.log(newArray)
    return newArray
}
}

filtro()*/

const pessoas = [
    {nome: `Ronoel`, idade: 32},
    {nome: `Francisco`, idade: 32},
    {nome: `Gabriele`, idade: 32},
    {nome: `Pedro`, idade: 02},
    {nome: `Graziele`, idade: 55},
    {nome: `Lima`, idade: 15},
]
// Usando arrow function e destructuring 
const people = pessoas.filter(({idade})=> idade > 50)
console.log(people)