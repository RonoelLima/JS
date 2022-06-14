function Produto(nome, preco, estoque){
 
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave para loops
        value: estoque, // valor da chave
        writable: false, // permite o valor ser alterado ou não
        configurable: false//configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave para loops
            value: estoque, // valor da chave
            writable: false, // permite o valor ser alterado ou não
            configurable: false//configurável

        },
        preco: {
            enumerable: true, // mostra a chave para loops
            value: estoque, // valor da chave
            writable: false, // permite o valor ser alterado ou não
            configurable: false//configurável

        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)
p1.estoque = 5000
console.log(p1)
console.log(Object.keys(p1))