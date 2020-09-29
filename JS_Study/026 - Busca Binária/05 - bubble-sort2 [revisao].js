/*
    OBJETIVO:
    Adaptando o algoritmo Bubble Sort para operar com vetor de objetos

    1)  Acrescentar um novo parâmetro, que vai corresponder à função de
        comparação (fnComp).

    2)  fnComp() será chamada de dentro do bubbleSort(), recebendo o
        elemento da posição atual e da posição seguinte como parâmetros.

    3)  fnComp() DEVE RETORNAR TRUE caso o primeiro parâmetro seja maior que
        o segundo, OU FALSE caso contrário.

    LEMBRE-SE Z > A
              26 > 1
              portanto na ordenação, o Z vai para fim do array!
*/


function bubbleSort2(vetor, fnComp) {
    let passadas = 0 // vezes que se passou por todo vetor

    let comparacoes = 0 /*  qtd de comparações em cada passada
                            (é igual a passadas * tamanho array) */

    let totalTrocas = 0 // final total de trocas feitas

    let trocas  /* qtd de trocas que foram feitas por passada
    se em uma passada não houver trocas, significa que o vetor esta ordenado!,
                                    e saímos do while */


    do {
        passadas++
        trocas = 0


        for (let i = 0; i < vetor.length - 2; i++) {
            comparacoes++

            // aqui diferente do bubbleSort1, a função verifica se precisa ordenar
            if (fnComp(vetor[i], vetor[i + 1])) {

                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas++

                totalTrocas++
            }
        }

    } while (trocas > 0)

    return vetor
}

const candidatos = require('./dados/candidatos-2018')

let candidatos100 = candidatos.slice(0, 99)

let ordenaElementos = (nome1, nome2) => {

    return nome1.NM_CANDIDATO > nome2.NM_CANDIDATO

} // return true se nome1 for maior


let resultado = bubbleSort2(candidatos100, ordenaElementos)

console.log('resultado ordem 100 candidatos :>> ', resultado)

console.log('----------------------------')

resultado = bubbleSort2(['T', 'H', 'I', 'A', 'G', 'O'], (a, b) => a > b)

console.log('resultado da ordem do meu nome :>> ', resultado);