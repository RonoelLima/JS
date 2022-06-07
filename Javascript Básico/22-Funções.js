// função nominal sem parâmetros nem retorno
function somar () {}
somar()// ato de chamar a função criada

// função nominal sem parâmetros com um retorno definido dentro dos colchetes
function somar1(){
    return console.log('Bom dia')
}
somar1()
//função nominal com parâmetros
function mensagem(mensagem){
    return console.log(`Você enviou uma mensagem ${mensagem}`)
}
mensagem('mensagem')
// salvando o retorno de uma função dentro de uma variável

const guardarMensagem = mensagem('Teste')

function sum(x, y){
    return x + y
}

console.log(sum(2,4))

function escopo(a, b){
    let teste = a + b
    return teste
}

// console.log(teste) // Erro teste is not defined - este erro deve-se ao fato que const e let tem escopo local, não sendo acessível fora do escopo da função

function sub( a=10 , b=50) {
    return a - b
}

console.log(sub())

const arrow = (mensagem) => {
    return mensagem
}

console.log(arrow('Está é uma arrow function'))