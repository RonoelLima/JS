Array.prototype.reduce2 = function (cb) {
    let acumulador = this[0]
    for ( let i = 0; i< this.length; i++) {
        acumulador = cb(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))