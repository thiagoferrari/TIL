// SEE THE ARRAY:

var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
 ];
 
 var podioPorPais = vencedores.map(function(valorAtual, indice, array) {
return console.log(
    `valorAtual: ${valorAtual}, indice: ${indice}, array: ${array}`) 
}
 );

/*   ABOUT THESE PARAMTERS:

the param. valorAtual this is required!
    ele representa o próprio item da iteração atual. Ou seja, à medida que a função map itera sobre o array, esse parâmetro receberá cada item.

the param. indice this is optional!
    ele representa o índice do item da iteração atual.

the param. array this is optional!
    ele representa o próprio array ao qual os itens pertencem.*/