// EM GERAL A UTILIDADE DE PILHA É PARA INVERTER AS COISAS!

let pilha = []

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

// aqui vai rodar essa string e capturar letra por letra (texto.charAt(i))
for(let i = 0; i < texto.length; i++) {
    // Inserção na pilha deve sempre ser feita ao FINAL
    pilha.push(texto.charAt(i))
}

console.log('pilha :>> ', pilha);


let inverso = ''
while(pilha.length > 0) {
    // Retiradas na pilha devem ser feitas também no FINAL
    inverso += pilha.pop()
}

console.log('inverso :>> ', inverso);