// Os tipos de dados primitivos são imutáveis - string, number, boleano, undefined, null(bigint, symbol)
let nome ='Luiz'
nome[0]= 'R' 
console.log(nome[0])

// Referências (mutável) - array, object, function

let a = [1, 2, 3]
let b = a
console.log(a,b)

a.push(4)
console.log(a,b)

b.pop();
console.log(a,b)

b = [...a, 5]// spread - copiando o valor de a para b
console.log(b)