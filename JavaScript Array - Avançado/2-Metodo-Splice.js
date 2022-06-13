//               -5         -4      -3       -2       -1
//              0           1       2       3       4
const nomes = ['Eduardo','Maria','Joana','Lucas','Gabriele']

//nomes.splice(indice inicial, delete, elemento a ser adicionado no indice de start do método...)
//simulando o metodo pop(), neste exemplo ele esta revovendo o quarto indice do array nomes
// este método retorna um array com o(s) elemento(s) excluido(s)
const removido = nomes.splice(1, 1)
console.log(nomes)
console.log(removido)
console.log(1)

const newArray = nomes.splice(3, 0, 'Ronoel','Carlos')

//simulando o metodo shift
const newArrays = [...nomes]
newArrays.shift(0, 1)
console.log(newArrays)

//simulando o unshift
console.log(newArrays.splice(0, 0, 'Ronoel', 'Francisco'))
