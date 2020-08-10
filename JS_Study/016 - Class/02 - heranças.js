// HERANÇAS: quando uma classe é extendida

class DispMovel {
    constructor(modelo, ano, marca) {
        this.modelo = modelo
        this.ano = ano
        this.marca = marca
        this.ligado = false
    }

    bateria() {
        if (this.ano > 2015) { return console.log('bateria boa') }
        console.log('bateria ruim')
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
console.log(Celular1.bateria())



// EXTENDENDO DispMovel
class Smartphone extends DispMovel {

    constructor(modelo, cor) {
        super(modelo) // aqui eu chamei do super(classe pai), a propriedade nome
        this.cor = cor

    }
}


Celular2 = new Smartphone('K10', 'roxo')

console.log(Celular2)