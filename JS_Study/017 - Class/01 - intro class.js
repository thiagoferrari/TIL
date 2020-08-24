// CLAS É UM OBJETO, ELE DEVE SER INSTANCIADO PARA FUNCIONAR ! (new Nome_Class), INSTANCIANDO é obtido geralmente um objeto !

// CLASS É UMA FUNCTION CONSTRUCTOR, única diferença é que ela vem com Class no inicio.

class GeraPessoa {
    constructor(nome, sobre) {
        this.nome = nome;
        this.sobre = sobre;
    }

    get obter_nome() {
        return `get - nome obtido: ${this.nome} ${this.sobre}`
    }

    set altera_sobre(sobre_novo) {
        this.sobre = sobre_novo
        console.log(`nome obtido: ${this.nome} ${this.sobre}`)
    }
}

pessoa1 = new GeraPessoa('thiago', 'ferreira')

pessoa1.altera_sobre = 'ferrari'