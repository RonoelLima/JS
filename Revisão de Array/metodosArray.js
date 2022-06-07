const pilotos = ['Vattel', 'Alonso', 'Raikkone', 'Massa']
pilotos.pop() // método para remover o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // método para adicionar um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no ínicio de array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // apartir do indice 2 o metodo não irá remover nenhum elemento , pois está com o segundo argumento com o valor o, depois irá adicionar os argumentos após o segundo argumento.
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// faz um cópia do array selecionado apartir do indice do argumento passado dentro da função
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // faz um copia do array a partir do indice do primeiro argumento até o indice anterior ao indice do segundo argumento

