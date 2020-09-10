//Async e await serve para resolver problema de ter que ficar chamando o .then toda vez que necessário. Para substituir o .then usamos o try{}. Para substituir o .catch usamos o catch{} VEJA:

async function main() {
    //USANDO ASYNC E AWAIT
    try {
        if (await getResultado(3) > 10) {
            console.log('o valor que retornou é maior que 10')
            if (await getResultado(3) < 10) {
                console.log('o valor é menor que 10')
            }
        }

    } catch (err) {
        console.log('deu errado')
        console.log(err)
    }
}


//MESMO CÓDIGO USANDO Promise
/*getResultado(5)
    .then((resultado) => {
        console.log('o valor que retornou é maior que 10')
        getResultado(3)
            .then((result) => {
                console.log('o valor é menor que 10')
            })
            .catch((erro) => {
                console.log('deu erro')
                console.log(erro)
            })
            .catch((err) => {
                console.log('deu erro')
                console.log(err)
            })
    })*/


function getResultado(parametro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parametro * 2.5)
        }, 1500)
    })
}

main()