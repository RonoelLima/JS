//Produto -> aumento, desconto
// Camiseta, caneca, lapits
//Produto
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor
}

Produto.prototype.desconto = function(valor){
    this.preco -= valor
}

//Função construtora
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome.preco):
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !=== 'number') return:
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Camiseta.prototype = Object.create(Produto.prototype)

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plático', 5)
camiseta.aumento(10)
console.log(camiseta)
console.log(produto)