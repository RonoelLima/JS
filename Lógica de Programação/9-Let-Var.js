const verdadeiro = true

// Var tem escoco de função/global

let nome = 'Ronoel'
var nome1 = 'Original'

// Let tem escopo de bloco {...}



if(verdadeiro) {
    let nome = 'Otavio'
    var nome1 = 'alterado1'
    console.log(nome, nome1)

    if(verdadeiro) {
        let nome = 'July'
        var nome1 = 'Alterado2'
        console.log(nome, nome1 )
    }
}

// a função fala oi vai mostrar no console o valor da variável sobrenome
var sobrenome = 'Miranda'

function falaOi () {
    console.log(sobrenome)
}

falaOi ()

// Porém se a variável estivesse dentro da função e console estivesse fora, o console não conseguiria mostrar no console a variavel

// se você usar var o JS usa um sistema que eleva a variável para o todo