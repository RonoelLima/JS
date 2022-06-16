function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => {

        if(typeof msg  !== 'string')  {
        reject('Caiu no error')    
        return
        }
        
        setTimeout(()=> {
           resolve(msg.toUpperCase() + '- Passei na promise') 
        }, tempo)
    })
} 

//Promise.all Promisse.race Promise.resolve Promise.reject Promise.


// const promises = [
//     'Primeiro valor',
//     esperaAi('Primeira Promise', 3000),
//     esperaAi('Segunda Promise', 5000),
//     esperaAi('Terceira Promise', 1000),
//     'Outro valor'
// ]

// //Promise.all tenta resolver todas as promisses ao mesmo tempo 
// Promise.all(promises)
//     .then((valor) => {
//         console.log(valor)
//     })
//     .catch((err) => {
//         console.log(error)
//     })
 
    
    
function baixaPagina() {
    const emCache = false;

    if(emCache) {
    return Promise.resolve('Página em cache')
} else {
    return esperaAi('Baixei a página', 3000)
}

}

baixaPagina()
.then((valor) => {
        console.log(valor)
    })
    .catch((err) => {
        console.log(err)
    })
    // Tenta resolver uma promise de cada vez    
    // Promise.race(promises)
    //     .then((valor) => {
    //         console.log(valor)
    //     })
    //     .catch((err) => {
    //         console.log(error)
    //     })