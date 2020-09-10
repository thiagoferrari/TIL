// Busca sequencial
// Parâmetros:
// 1º: lista de itens a ser pesquisada
// 2º: valor a ser pesquisado
// Retorno:
// A posição da lista onde foi encontrado o valor pesquisado OU
// o valor convencionado -1 caso o valor buscado não tenha sido encontrado

function buscaSequencial(lista, valorBusca) {
    for(let i = 0; i < lista.length; i++) {
        // Encontrou o que está buscando: retorna a posição
        // em que foi encontrado
        if(lista[i] === valorBusca) return i
    }
    return -1 // valorBusca não foi encontrado em lista 
}

const primos = require('./dados/lista-primos')

console.time('Buscando o valor 4903')
console.log(buscaSequencial(primos, 4903))
console.timeEnd('Buscando o valor 4903')

console.log('---------------------------------')

console.time('Buscando o valor 19')
console.log(buscaSequencial(primos, 19))
console.timeEnd('Buscando o valor 19')

console.log('---------------------------------')

console.time('Buscando o valor 4110')
console.log(buscaSequencial(primos, 4110))
console.timeEnd('Buscando o valor 4110')

// O esquema module.exports + require() só funciona em JavaScript
// para ser executado no Node. Não funciona em JS dentro de páginas
// HTML

const nomes = require('./dados/vetor-nomes')

console.log('---------------------------------')

console.time('FAUSTO')
console.log(buscaSequencial(nomes, 'FAUSTO'))
console.timeEnd('FAUSTO')

console.log('---------------------------------')

console.time('ZULEICA')
console.log(buscaSequencial(nomes, 'ZULEICA'))
console.timeEnd('ZULEICA')

console.log('---------------------------------')

console.time('WEVERSON')
console.log(buscaSequencial(nomes, 'WEVERSON'))
console.timeEnd('WEVERSON')

console.log('---------------------------------')

console.time('FEICIBUQUISSON')
console.log(buscaSequencial(nomes, 'FEICIBUQUISSON'))
console.timeEnd('FEICIBUQUISSON')