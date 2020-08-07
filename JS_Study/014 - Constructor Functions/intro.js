// É O SEGUINTE:

// FACTORY FUNCTION: é funcao que cria objeto, so isso

// CONSTRUCTOR FUNCTION: uma funcao instancia um objeto, é diferente: o nome da Funcao tem que ser declarado em Capslock, e nao eh preciso colocar return no final, pois ja eh instanciado!

function Instancia_Obj (nome, sobren) {
//ATRIBUTOS PUBLICOS: esses valores sao acessiveis fora da function
    this.nome = nome
    this.sobren = sobren

//ATRIBUTOS PUBLICOS: esses valores NAO sao acessiveis fora da function
    const id = Math.random()

    //return this sendo executado por baixo dos panos!
}

let pessoa01 = new Instancia_Obj(`thiago`,`borges`)
console.log(pessoa01)