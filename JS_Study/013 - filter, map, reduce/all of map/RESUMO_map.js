// Map x forEach
//forEach: percorrer um array e executar um determinado bloco de código para cada item
//Map: iterar um array original e gerar um novo array a partir de funcao recebida no callback

// COUNT EACH OF EACH WORD IN ARRAY

let fruits = ['abacaxi', 'morango', 'laranja', 'caju', 'melancia', 'limão', 'abacate', 'framboesa', 'maçã']

count_letters = fruits.map(i => i.length)
console.log(count_letters)


//UPPER WORDS WITHIN ARRAY

upper_words = fruits.map(i => i.toUpperCase()) //*new array created
console.log(upper_words)


// MATH POW IN LENGTH OF WORDS
POW_p = count_letters.map(i => Math.pow(i, 2))
console.log(POW_p)