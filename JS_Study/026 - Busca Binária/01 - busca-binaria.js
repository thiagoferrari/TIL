// Pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca

let comp = 0 //comp é uma variável para contar o numero de comparações

function buscaBinaria(lista, valorBuscado) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        // Verifica se o valor na posição média é o valor de busca
        if (valorBuscado === lista[meio]) {
            comp++
            return meio
        }
        else if (valorBuscado < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else {  // valorBuscado > lista[meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       // Valor não encontrado

}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('--------------------------------------------')

comp = 0
console.time('ZYON')
console.log(buscaBinaria(vetorNomes, 'ZYON'))
console.timeEnd('ZYON')
console.log('Comparações: ', comp)

console.log('--------------------------------------------')

comp = 0
console.time('INSTAGRAMILDA')
console.log(buscaBinaria(vetorNomes, 'INSTAGRAMILDA'))
console.timeEnd('INSTAGRAMILDA')
console.log('Comparações: ', comp)