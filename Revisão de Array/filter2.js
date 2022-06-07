Array.prototype.filter2 = function(cb) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { none: 'Notebook', preco: 2499, fragil: true},
    { none: 'iPad Pro', preco: 4199, fragil: true},
    { none: 'Copo de Vidro', preco: 12.49, fragil: true},
    { none: 'Copo de Plástico', preco: 18.99, fragil: true},
    { none: 'Desktop', preco: 5000, fragil: false},
]

const result = produtos.filter2((produtos) => produtos.preco > 1000).filter2((produtos)=> produtos.fragil = true)
console.log(result)