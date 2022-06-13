// return
// Retorna um valor
//Termina a função
// function soma(a , b) {
//     return a + b
// }

// let s1 = soma(2, 5)
// console.log(s1)

// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome}
// }

// // criando um objeto através de uma função
// const p1 = criaPessoa('Luiz', 'Otavio')
// console.log(typeof p1)
// console.log(p1)

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto
//     }

//     return falaFrase
// }

// const olaMundo = falaFrase('Olá')
// console.log(olaMundo('mundo!'))

// function duplica(n) {
//     return n * 2
// }

// function triplica(n) {
//     return n * 3
// }

// function quadriplica(n) {
//     return n * 4
// }

function criaMultiplicador(multiplicador){
    return function multiplicacao(n){
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))