const nomes = ['Eduardo','Maria','Joana','Lucas','Gabriele']
//String, Objetos, Funções, Numeros
//nomes[2] = 'João'
//delete nomes[2]
//console.log(nomes)

//new Array('Maria','Carlos')

//copiando o array nomes com o spread operator
const novo = [...nomes]
//Elimina o ultimo elemento do array
const removidoDoFinal = novo.pop()
const removidoDoInicio = novo.shift()
//Adicionando no final do array
novo.push('Ronoel')
//Adicionando no início do array
novo.unshift('Lucas')
console.log(novo)
console.log(nomes.length)

const newArray = [...nomes]
console.log(newArray.slice(1,3))
//removendo elementos do início e final do array com o método slice
console.log(newArray.slice(1,-1))

const names = 'Luiz Otavio Miranda'
//Transformando uma string em um array com o método split
const nameDividido = names.split(' ')
console.log(nameDividido)
//Transformando um array em uma string
const criandoArray = nameDividido.join(' ')
console.log(criandoArray)