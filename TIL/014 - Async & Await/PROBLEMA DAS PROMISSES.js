function BestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                sucess: true,
                bandName: band,
                msg: `${band} is the best rock ever!`
            })
        } else {
            reject({
                sucess: false,
                msg: `I'm not sure!`
            })
        }
    })
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve(`Bohemian Rhapsody by ${response.bandName}`)

        } else {
            reject(`Do you know queen ?`)
        }
    })
}

BestRockBand('Queen')
    .then(response => {
        console.log('Checking the answer....')
        return bestRockSong(response).then()
    })
    .then(response => { // ESSE THEN PERTENCE A PROMISSE ANTERIOR, DA LINHA ANTERIOR !
        console.log(`Finding the best song.....`)
        console.log(response)
    })
    .catch(err => {
        console.log(err.msg)
    })

        // O PROBLEMA ESTÁ EM TER QUE CHAMAR A PROMISE DENTRO DO RESULTADO DE OUTRA PROMISE, (ENCADEAMENTO DE PROMISES)
    // O QUE ACONTECE É QUE O CÓDIGO FICA MUITO EXTENSO, RADOUQUI