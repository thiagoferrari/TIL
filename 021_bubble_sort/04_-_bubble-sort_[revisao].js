
    /* LEMBRE-SE Z > A
    26 > 1 */

function bubbleSort(vetor) {
    let passadas = 0 // vezes que se passou por todo vetor

    let comparacoes = 0 /*  qtd de comparações em cada passada
                            (é igual a passadas * tamanho array) */

    let totalTrocas = 0 // final total de trocas feitas

    let trocas  /* qtd de trocas que foram feitas por passada
    se em uma passada não houver trocas, significa que o vetor esta ordenado!,
                                    e saímos do while */

    do {
        passadas++
        trocas = 0 //reboot em trocas feitas!

        for (let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++

            if (vetor[i] > vetor[i + 1]) {

                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas++
                totalTrocas++
            }
        }


    } while (trocas > 0) // se = 0 vetor está ordenado

    // console.log('totalTrocas :>> ', totalTrocas);
    // console.log('passadas :>> ', passadas);
    // console.log('trocas :>> ', trocas);
    // console.log('comparacoes :>> ', comparacoes)

    return vetor
}

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

console.time('bubbleSort')
let ordemNum = bubbleSort(nums)
console.timeEnd('bubbleSort')

console.log('ordemNum :>> ', ordemNum);

console.log('------------------------------------ :>> ')

console.time('meuNomeOrdenado')
let meuNomeOrdenado = bubbleSort(['T', 'H', 'I', 'A', 'G', 'O'])
console.timeEnd('meuNomeOrdenado')

console.log('meuNomeOrdenado :>> ', meuNomeOrdenado)