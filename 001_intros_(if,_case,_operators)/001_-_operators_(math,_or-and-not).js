<script>
// && AND, || or, ! not

	var sex = 'F', idade = 32

	if (sex === 'F' && idade >= 15) {
		console.log('OK WITH AND')
	}


	if (sex === 'M' || idade >= 15) {
		console.log('OK WITH OR')
	} 

	if (sex != 'M' || idade >= 33) {
		console.log('OK, FINALLY!')
	}
	
	
//MATH OPERATORS

console.log('conta feita aqui: b = 5+5')
	b = 5+5
console.log(b)

console.log('conta feita aqui: ++b')
	m = ++b
console.log(m)


console.log('conta feita aqui: c = 5-5')
	c = 5-5
console.log(c)


console.log('conta feita aqui: d = 5*5')
	d = 5*5
console.log(d)

console.log('conta feita aqui: e = 5/5')
e = 5/5
console.log(e)

console.log('conta feita aqui: f = 5**2')
f = 5**2 //POTENCIACAO	
console.log(f)

console.log('conta feita aqui: g = Math.pow(5,2)')
g = Math.pow(5,2) //POTENCIACAO: aqui eu usei uma biblioteca nativa do JS
console.log(g)

console.log('conta feita aqui: h = 5 % 1')
h = 5 % 2
console.log(h)

console.log('conta feita aqui: x += 3')

		//abreviacao de soma:
	var x = 10
	x += 3
	// x = x + 3
	console.log(x)



console.log('raiz quadrada: math.sqrt(variable)')
	 console.log(Math.sqrt(81))


console.log('ARREDONDAR P/ BAIXO: Math.floor: ')
	 var y = 2.6666
	 console.log(Math.floor(y))



console.log('ARREDONDAR P/ CIMA: Math.cely: ')
	 var y = 2.6666
	 console.log(Math.ceil(y))

/*
DATYPES:
undefined
number
boolean
string
object
funcions - uma variavel pode ter uma funcao dentro dela!
*/
</script>