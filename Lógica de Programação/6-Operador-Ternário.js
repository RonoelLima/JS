const pontuacaoUsuario = 1500

if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
} else {
    console.log('Usuário Normal')
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário' : 'Usuário Normal'
console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'