const _velocidade = Symbol('velocidade');


class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 55;
    }

    set velocidade(valor) {
        console.log('SETTER')
        if(typeof valor !== 'number') return
        if( valor >= 100 || valor <= 0) return
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER')
        return this[_velocidade] 
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca')
c1.velocidade = 99
console.log(c1.velocidade)

// for(let i = 0; i <= 2000; i++){
//     c1.acelerar();
// }