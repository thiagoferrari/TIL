function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

//obterMenor acha o menor valor no resto do vetor! (a partir de um index inicial)
//obterMenor vai retornar o index do menor valor encontrado!
        // VEJA:
    function obterMenor(vetor, inicial) {
        let posMenor = inicial

        for (let i = inicial + 1; i < vetor.length; i++) {
            if (vetor[i] < vetor[posMenor]) posMenor = i
            comparacoes++
        }
        return posMenor
    }


    // for externo (faz a troca) e vai até a penúltima pos.
    for (i = 0; i < vetor.length - 1; i++) {
        // i é o index sendo Iterado

        passadas++

        posMenor = obterMenor(vetor, i + 1)

        comparacoes++

        if (vetor[posMenor] < vetor[i]) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas});
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]
selectionSort(nums)
console.log('nums :>> ', nums);