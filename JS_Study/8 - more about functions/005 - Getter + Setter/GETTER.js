function fabricarPessoa(nome, sobrenome) {
    let pessoa = {

        get nomeCompleto () { return `${nome} ${sobrenome}`},
        nome: nome,
        sobrenome: sobrenome

    }


    return pessoa
}

let pessoa1 = fabricarPessoa('thiago', 'costa')
let pessoa2 = fabricarPessoa('daiane', 'costa')

console.dir(pessoa1)
console.dir(pessoa2.nomeCompleto)

/*  VEJA QUE EU AQUI USEI EM UM DOS ATRIBUTOS DO OBJETO UMA FUNÇÃO! bacana demais!  */
/*  BASICAMENTE O GETTER SERVE PARA CONVERTER UMA FUNCTION EM ATRIBUTO DO ARRAY !    */