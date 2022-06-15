class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return this.nome + 'Já ligado'
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return this.nome + 'Já desligado'
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone')
d1.ligar()
d1.desligar()
console.log(d1)

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Sansug', 'Preto', 'Galaxy S10')
s1.ligar()
console.log(s1)