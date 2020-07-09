function fabricarPessoa(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    pessoa.nomeCompleto = () => `${pessoa.nome} ${pessoa.sobrenome}`

    return pessoa
}

let pessoa1 = fabricarPessoa('thiago', 'costa')
let pessoa2 = fabricarPessoa('daiane', 'costa')

console.dir(pessoa1)
console.dir(pessoa2.nomeCompleto())

/*  VEJA QUE EU AQUI USEI EM UM DOS ATRIBUTOS DO OBJETO UMA FUNÇÃO! bacana demais!  */