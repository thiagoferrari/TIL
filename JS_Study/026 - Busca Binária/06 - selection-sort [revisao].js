function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    //encontrarMenor acha o menor valor no resto do vetor! (a partir do menor index até então encontrado)
    //encontrarMenor vai retornar o index do menor valor encontrado!
    // VEJA:

    function encontrarMenor(vetor, inicial) {
        let posMenor = inicial


        for (let i = inicial + 1; i < vetor.length; i++) {

            // se o ELEMENTO ATUAL que está sendo iterado for maior que MENOR ELEMENTO ENCONTRADO (posMenor), FAÇA:
            if (vetor[i] < vetor[posMenor]) posMenor = i
            comparacoes++
        }
        return posMenor // retorna o index do menor número encontrado !
    }


    // for externo (faz a troca) e vai até a penúltima posição
    for (i = 0; i < vetor.length - 1; i++) {

        passadas++

        // aqui vou passar o próximo número (i + 1)
        posMenor = encontrarMenor(vetor, i + 1)

        comparacoes++

        if (vetor[posMenor] < vetor[i]) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({ passadas, comparacoes, totalTrocas });
}

/* const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]
selectionSort(nums)
console.log('nums :>> ', nums); */

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
selectionSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)