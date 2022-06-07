let listaPalavras = [
    "afã",
    "aia",
    "ala",
    "ama",
    "Roma me tem amor",
    "Socorram-me, subi no ônibus em Marrocos",
    "A mala nada na lama",
    "Cão",
    "Cão bebeu água",
];

function ehPalindromo(palavra) {
    //verificando letra por letra
    var totalDeLetras = palavra.length;
    var letrasAconferir = Math.floor(totalDeLetras/2); // a propriedade Math.floor arredonda o número fracionado para baixo
    for( let i = 0; i < letrasAconferir; i++) {
        let letra = palavra[i];// seleciona a letra correspondente ao indice da letra na string começando pelo indice representado na inicilização da função for.
        let indice = i; // representa o indice atual da letra
        let indiceAComparar = totalDeLetras - 1 - indice;
        let letraAcomparar = palavra[indiceAComparar]
        if (letra != letraAcomparar ) {
            return false;
        }
    }

    return true;
}
console.log(ehPalindromo("aiâ"))




listaPalavras.forEach((palavra, ind) => {
    if(ehPalindromo(palavra)) {
        console.log("A palavra: ", palavra, "é palidromo");
    } else {
        console.log ("A palavra: ", palavra, "Não é palidromo !!!")
    }
})