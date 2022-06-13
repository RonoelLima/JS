// // A função definida com a palavra function tem uma variável chamada arguments que salva todos os valores passados como parâmetro para as funções
// function funcao(){
// let total = 0;
// for (let argumento of arguments) {
//     total += argumento
//     console.log(total)
// }
// }

// funcao(1, 2, 3, 4)

// function funcao(a, b, c, d, e, f){
//     console.log(a,b,c,d,e,f)
// }

// funcao(1,2,3)

// passando um valor padrão para um parâmetro da função
// function funcao (a,b = 2, c){
//      c = c || 4
//     console.log(a + b + c)
// }

// funcao(2, undefined ,10)

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade)
// }

// let obj = { nome: 'Ronoel', sobrenome: "Lima", idade: "32"}

// funcao(obj)

// function funcaoArray([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3)
// }

// funcaoArray(['Ronoel', 'Gabriele', 30])

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero 
        if(operador === '-') acumulador -= numero 
        if(operador === '*') acumulador *= numero 
        if(operador === '/') acumulador /= numero 
    }
    console.log(acumulador)
}

conta('*', 0, 20,30,40,50)