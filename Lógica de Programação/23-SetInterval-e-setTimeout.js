function mostraHora(){
    let data = new Date()

    return data.toLocaleString('pt-Br',{
        hour12: false
    })
}



const timer = setInterval( () => console.log(mostraHora()) 
, 1000)

setTimeout(()=>{
    clearInterval(timer);
},10000)