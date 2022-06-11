// const tresHoras = 60 * 60 * 3 * 1000
// const data = new Date()// Função construtora
// console.log(data.toString())
// console.log(data.getDate())
// console.log(data.getMonth())
// console.log(data.getFullYear())
// console.log(data.getHours())
// console.log(data.getMinutes())
// console.log(data.getSeconds())
// console.log(data.getMilliseconds())
// console.log(data.getDay())

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear()) 
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data =  new Date()
const dataBrasil = formatData(data)
console.log(dataBrasil);

