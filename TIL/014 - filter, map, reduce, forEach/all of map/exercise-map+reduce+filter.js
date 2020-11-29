// RETORNE A SOMA TOTAL DO TRIPLO DE TODOS NUMEROS IMPARES


let numeros = [ 49, 49, 49, 16, 64, 25, 49, 81, 16 ]

const solicitacao = numeros
.filter(a => a % 2 != 0)
.map(b => b * 3)
.reduce((cache, c) => cache + c)

console.log(solicitacao)