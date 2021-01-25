/*Crie uma função que recebe a um número e retorne A CADA 1.5 segundos se é par ou impar ! Isso tudo por Promisse!. Se for par retorne em then, caso não em catch*/

promisse = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (numero % 2 == 0) {
                resolve(`este numero ${numero} é par`)
            } else {
                reject(`este numero ${numero} é impar`)
            }
        }, 1500)
    })
}

promisse(60)
.then(function(response) {return console.log(`msg do response(resolve): ${response}`)})
.catch(function(error) {return console.log(`msg do error(reject): ${error}`)})