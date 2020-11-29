// HERANÇAS: quando uma classe é extendida

class DispMovel {
    constructor(modelo, marca) {
        this.modelo = modelo
        this.ligado = false

    }


    ligar() {
        if (this.ligado == true) return 'dispositivo já ligado'
        this.ligado = true
    }

    desligar() {
        if (this.ligado == false) return 'dispositivo já desligar'
        this.ligado = false
    }
}


Celular1 = new DispMovel('A50', '2005', 'Siemens')

console.log(Celular1)



// EXTENDENDO DispMovel
class Smartphone extends DispMovel {

    constructor(modelo, cor) {
        //this.modelo = modelo NÃO FAÇO ISSO, NESTE CASO CHAMO O SUPER
        super(modelo) // aqui eu chamei do super(classe pai), a propriedade nome
        this.cor = cor

    }
}


Celular2 = new Smartphone('K10', 'roxo')

console.log(Celular2)