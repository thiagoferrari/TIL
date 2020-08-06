//OBTENHA O REAJUSTE DE 4% EM UM NOVO ARRAY A PARTIR DOS SEGUINTE ARRAY:

var produtos = [
    {
        nome : "Smartphone 5' Android",
        preco : 1200
    },
    {
        nome : "Notebook 4GB Windows 10",
        preco : 2100
    },
    {
        nome : "SmartTV 50' LED",
        preco : 8700
    }
 ];

 let reajuste = produtos.map((array) => ` nome: ${array.nome} - preco(+4%): ${array.preco * 1.04}`)

 console.log(produtos)