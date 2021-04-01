import React from 'react'

const MultiplosEstados = () => {

    /* códigos do exemplo 1: */
    const [valor, setAdicao] = React.useState(0)


    /* códigos do exemplo 2: */
    const [dados, setDados] = React.useState({ nome: "Thiago", idade: "20" })
    function handleClick() {
        setDados({ ...dados, facul: 'Cursando' })
    }

    return (<>
        <h1>Multiplos Estados</h1>
        <p>É possível trabalhar com vários estados em um mesmo arquivo .js </p>
        <p>Mostrarei aqui mais exemplos: </p>

        <fieldset>
            <h4>1º: estado baseado neste botão, que controla a adição de +1 ao número:</h4>
            <button onClick={() => setAdicao(valor + 1) /* nota no rodapé */}>
                <a>Clique para a adição de +1:</a> <a>{valor}</a>
            </button>
        </fieldset>


        <fieldset>
            <h4>2º: Um botão que ao clicar mostra mais uma propridade de um objeto dentro do estado*:</h4>

            <button onClick={handleClick /* nota no rodapé */} >
                <a>Clique para mostrar +1 propriedade do objeto:</a>
            </button>

            <div>{dados.nome}</div>
            <div>{dados.idade}</div>
            <div>{dados.facul}</div>

            <p>*por trás do código trabalhamos com o spread (para espalhar as propridades já existentes e adicionar uma nova)</p>
        </fieldset>

    </>)
}

export default MultiplosEstados


/* podemos usar arrow function direto aqui ou colocar na pilha do handleClick */