const numeros = [1, 2, 3, 4, 5,7,8,9,10]


// o termo continue faz o código pular o loop caso a condição do if seja satisfeita
for (let  numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2')
        continue;
    }

    console.log(numero)
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }

}