const numeros  = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

const firstNumero = numeros[0]
console.log(firstNumero)

const [primeiro, segundo, ...resto] = numeros //operador rest
console.log(primeiro, segundo)// 1 e 2
console.log(resto)

const [um, ,três, ,cinco] = numeros
console.log(um, três, cinco)


// Array de 3 indices com três array de 2 nível com mais três indices 
const numbers = [ [1,2,3],[4,5,6],[7,8,9]]

const [lista1, lista2, lista3] = numbers
console.log(lista2[2])

const [,[,,seis]] = numbers
console.log(seis)

