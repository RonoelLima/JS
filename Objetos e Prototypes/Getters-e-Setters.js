function Produto(nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;
 
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave para loops
        configurable: true,
        get : function(){
            return estoque;
        }, 
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Bad value')
            }
        }
    })

}

function criarProduto(nome){
    return {
        get nome(){
            return nome;
        }, 
        set nome(valor) {
            valor = valor.replace('coisa', '')
            nome = valor;
        }
    }
}

const p2 = criarProduto('Camiseta');
p2.nome = 'Qualquer coisa'
console.log(p2.nome)

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1)
// p1.estoque = 'asdasd'
// console.log(p1.estoque)
