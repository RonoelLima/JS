const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;


function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    })
}



const iniciaRelogio = () => {
    timer = setInterval(() =>{
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        segundos = 0
    }
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
        
    }
})





