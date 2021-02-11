function getResultado(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param* 2.5)
        }, 1500)
    })
}


async function main() {
    try {
        if (await getResultado(5) > 10) {
            console.log('o valor retornado é maior que 10')
            if (await getResultado(3) < 10) {
                console.log('o valor é menor que 10')
            }
        }

    }
    catch (err) {
        console.log('deu errado')
        console.log(err)
    }
}












main()