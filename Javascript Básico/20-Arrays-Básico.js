const nome = 'Luiz Otávio' // as strings possuem indice correspondente ao seu tamanho/quantidade de caracteres

const alunos = ['Luiz', 'Maria', 'João'];// cada elemento um array possue um indice começando do indice 0
alunos[0] = 'Eduardo' // alterando um indice do array
alunos[3] = 'Carlos' // Adicionando um elemento no array

alunos.push('Ronoel') // adicionando um elemento no final do array
alunos.unshift('Luiza') //adiciona um elemento no início do array
const alunoRemovidoFinal = alunos.pop() //remove o último elemento do array e permite salvar o elemento removido em uma variável
const alunoRemovidoInicio = alunos.shift() //removido//remove o primeiro elemento do array e permite salvar o elemento removido em uma variável
delete alunos[1]; // deleta um elemento do array e deixa o indice vazio - undefined
console.log(alunos.slice(0, 2))// fatia o array de acordo com o indice inicial e o indice final informado

console.log(typeof alunos)
console.log(alunos instanceof Array)

console.log(alunoRemovidoFinal)
console.log(alunoRemovidoInicio)
console.log(alunos)
console.log(alunos.length)
console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])

