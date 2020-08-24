    /*Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de \idade o resultado deve cair no .then, caso contrário, no .catch*/



    let promisse = function (numero) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (numero > 18) {
                    resolve(`Usuário tem mais de 18, exatamente ${numero}`)
                } else {
                    reject(`Usuário tem menos de 18, exatamente ${numero}`)
                }
            }, 2000)
        })
    }

    promisse(5)
        .then(function (msg_resolve) { return console.log(`msg_resolve: ${msg_resolve}`) })
        .catch(function (msg_reject) { return console.log(`msg_reject: ${msg_reject}`) })