console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // adicioana um elemento no final do array
console.log(aprovados.length)

aprovados[9]='Rafael' // adicionando um elemento no infice especificado
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort() // organiza o array em ordem crescente ou alphabética
console.log(aprovados)

delete aprovados[1] // transforma em undefined o elemento de indice 1
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Ronoel', 'Gabriele')// indice que inicia a função, o segundo argumento diz a quantidade de elementos que será exclído, o terceiro elemento é adicionado ao array
console.log(aprovados)