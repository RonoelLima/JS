const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}', 
    '{"nome" : "Caderno", "preco" : 13.90}',
    '{"nome" : "Kit de Lapis", "preco" : 41.22}',
    '{"nome" : "Caneta", "preco" : 7.50}',
]

const paraObjeto = json => JSON.parse(json) // método para transformar texto em objeto javascript
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)