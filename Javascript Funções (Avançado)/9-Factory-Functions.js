// this se refere ao elemento que chama o metodo
// Factory function
function criaPessoa(nome, idade, altura, peso, sobrenome){
    return {
        nome, 
        sobrenome,
        idade,
        fala() {
            return `${this.nome} e ${idade} e ${this.altura} e e ${this.peso}`
        },
        altura,
        peso, 
        //Getter permite acessar um método da função utilizando dotnotaion sem os parenteses.
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter

        set nomeCompleto(valor){
            valor = valor.split(' ');
            console.log(valor)
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        }

        
    }
}

const pessoa = criaPessoa('Ronoel', 32, 1.70, 64, 'Francisco')
pessoa.nomeCompleto = 'Maria Lucas'
console.log(pessoa.nomeCompleto)