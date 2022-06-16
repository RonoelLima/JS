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

//Promise.all Promisse.race Promise.resolve Promise.reject Promise.


const promises = [
    'Primeiro valor',
    esperaAi('Primeira Promise', 3000),
    esperaAi('Segunda Promise', 5000),
    esperaAi('Terceira Promise', 1000),
    'Outro valor'
]

Promise.all(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((err) => {
        console.log(error)
    })