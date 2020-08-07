// o Object.defineProperty é 'igual' o Object.freeze !
// Porém ele serve para CRIAR/CONFIGURAR um atributo já exsitente ! EXEMPLO:

function Produto(nome, valor, estoque) {
    this.nome = nome
    this.valor = valor
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // torna chave privada ou pub
        value: estoque, // de qual parametro vem o valor a ser usado no this.estoque
        writable: false, // permite alterar valor passado em parâmetro
        configurable: true // permite apagar a chave E permite em uma outra declaração de Object.defineProperly mudar os valores como bem quiser..
    })
} 

const Produto01 = new Produto('soap', '5', '15')
Produto01.estoque = 5050 // aqui não consigo alterar devido a chave estoque estar em writable:false

console.log(Produto01)