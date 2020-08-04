// FILTER OF NATURAL NUMBERS

let vetor = [-8, 15, 4, 0, -3, -7, 11, 5, 6, -1, 9]

let num_nat = vetor.filter( i => i >= 0) //aqui return com arrow
console.log(`NATURAL NUMBERS: ${num_nat}`)


// FILTER OF EVEN NUMBERS

let num_par = vetor.filter( i => i % 2 == 0)
console.log(`EVEN NUMBERS: ${num_par}`)

/******************** */

// FILTER OF STRING VALUES

let mix = ['cavalo', 13, true, null, 'cabra', -7, 16, undefined, 0, 'vaca', [1, 2, 3], 'ovelha', 0.67]

strings = mix.filter( i => typeof(i) == `string`)
console.log(`ONLY STRING VALUES: ${strings}`)