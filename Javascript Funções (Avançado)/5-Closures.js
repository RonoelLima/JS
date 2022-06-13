function criaOutraFuncao(nome){
    return function () {
        return nome
    }
}

const funcao = criaOutraFuncao('Ronoel');
console.dir(funcao());