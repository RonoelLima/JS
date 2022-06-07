/*
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true.
|| -> OR - OU -> Todas as expressões precisam ser falsas para retornar false
! -> NOT -> NÃO
*/
console.log(true && true); // ambas expressões precisam ser verdadeiro

console.log(false && true); // fals0

const express = !!!true || false // verdadeiro
console.log(express)
const express2 = false || false // falso
const express3 = !false || !false // Verdadeiro
console.log(express3)

const user = 'Ronoel'
const senha = '12345'
const mensagem ='Por favor faça o login ou cadastre-se para utilizar o sistema'

if(user) {
     console.log(`Seja bem vindo ${user}`) 
} else {
    console.log(mensagem)
}
