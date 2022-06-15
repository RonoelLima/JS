class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }
    
    //Método de Instância
    aumentarVolume(){
        this.volume += 2
    }
    
    //Método de Instância
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método Estático
    static soma(x, y){
        return console.log(x + y)
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
console.log(controle1)
ControleRemoto.soma(2 , 4)
