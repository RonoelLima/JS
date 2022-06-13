//Função Construtora - Cria Objetos
//Modelo criado
//não é necessário colocar a virgula após criar uma nova chave
function Pessoa(nome, sobrenome){
    //Privados
    const ID = 123456
    const metodoInterno = function(){

    }

    //Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = function(){
        console.log('Sou um método')
    }
}

// está função vai herdar o modelo criado acima
// a palavra new cria um objeto vazio e fazer o this apontar para o novo objeto
const p1 = new Pessoa('Luiz', 'Otavio')
console.log(p1.nome)
p1.metodo()
