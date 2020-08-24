let somente_par = (n) => {
    return new Promise((resolve, reject) => {
        if (n % 2 == 0) {
            resolve(`o número ${n} é par!`)
        } else {
            reject(` o numero ${n} não é par!`)
        }
    }

    )
}

somente_par(5)
.then(function(msg_ok) { return console.log(`passando pelo then: ${msg_ok}`)})
.catch(function(msg_nao_ok) { return console.log(`passando pelo catch: ${msg_nao_ok}`)})