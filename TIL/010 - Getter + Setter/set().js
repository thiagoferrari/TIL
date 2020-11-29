// O set() e get() transformam a função em frente em propriedade, no caso do setter não é possivel acessar ele, somente atribuir um valor

//O set() trabalha na alteração do Array/obj! enquanto get a leitura do que está dentro do array/obj !


class GeraNome {
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

pessoa1 = new GeraNome('thiago', 'ferreira')

pessoa1.altera_sobre = 'ferrari'