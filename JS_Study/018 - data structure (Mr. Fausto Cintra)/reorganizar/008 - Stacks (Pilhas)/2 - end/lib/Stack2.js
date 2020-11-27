// FEITO PARA OBJETOS!

module.exports = class Stack {
    
    constructor() {
        this.data = {}  // Armazenamento
        this.count = 0
    }

    // Inserção (neste caso como é um objeto, O PUSH NÃO FUNCIONA, portanto trabalhamos com o seguinte:)
    push(value) {
        this.count++
        this.data[this.count] = value
    }

    // Remoção (aqui também, O POP NÃO FUNCIONA, portanto trabalhamos com o seguinte:)
    pop() {
        let value = this.data[this.count]
        delete this.data[this.count]
        this.count--
        return value
    }

    // Verificação do topo da pilha ("olhadinha")
    peek() {
        return this.data[this.count]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.count
    }
}