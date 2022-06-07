const produtos = [
    { none: 'Notebook', preco: 2499, fragil: true},
    { none: 'iPad Pro', preco: 4199, fragil: true},
    { none: 'Copo de Vidro', preco: 12.49, fragil: true},
    { none: 'Copo de Plástico', preco: 18.99, fragil: true},
    { none: 'Desktop', preco: 5000, fragil: false},
]

const result = produtos.filter((produtos) => produtos.preco > 1000).filter((produtos)=> produtos.fragil = false)
console.log(result)