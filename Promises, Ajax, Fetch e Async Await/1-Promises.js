function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(()=> {
           resolve(msg) 
        }, tempo)
    })
} 



esperaAi('Conexão com o DB', rand(1, 3))
.then( (res) => {
    console.log(res)
    return esperaAi('Buscando dados da BASE', rand(1, 3))
}).then( (res) => { 
    console.log(res)
    return esperaAi( 5, rand(1, 3))
}).then( (res) => {
    console.log(res)
}).then( (res) => {
    console.log('Exibindo dados na tela')
})
.catch((error) => {
    console.log(error)
})
