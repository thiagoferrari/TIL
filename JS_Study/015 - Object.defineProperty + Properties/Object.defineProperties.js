// O Object.defineProperties() serve para CRIAR/CONFIGURAR várias propriedades de uma vez

function Produto(nome, valor, estoque) {
    this.nome = nome
    this.valor = valor
    this.estoque = estoque

    Object.defineProperties(this, { //AQUI PASSO O ATRIBUTO DIRETO!
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        valor: {
            enumerable: true,
            value: valor*2,
            writable: false,
            configurable: true
        },

    })
}

let Produto01 = new Produto('thiago', 80, 4)
console.log(Produto01)