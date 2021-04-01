import React from 'react'

const PropsEstados = () => {

    /* códigos do exemplo 1: */
    const [valor, setAdicao] = React.useState(0)


    /* códigos do exemplo 2: */
    const [dados, setDados] = React.useState({ nome: "Thiago", idade: "20" })
    function handleClick() {
        setDados({ ...dados, facul: 'Cursando' })
    }

    return (<>
        <h1>Props+Estados</h1>
        <p>É possível trabalhar com os estados dentro dos props:</p>

        <fieldset>
            <h4>1º: estado baseado neste botão, que controla a adição de +1 ao número:</h4>
            <button onClick={() => setAdicao(valor + 1) /* nota no rodapé */}>
                <a>Clique para a adição de +1:</a> <a>{valor}</a>
            </button>
        </fieldset>


    </>)
}

export default PropsEstados

