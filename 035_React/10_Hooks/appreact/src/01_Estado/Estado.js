import React from "react"

const Component = () => {

    let estado = true

    // inverter estado do botão caso clicado
    let handleClick = () => {
        estado = !estado
        console.log('estado (Ativo=true/Inativo=false) :>> ', estado);
    }

    return (
        <>
            <p>O Estado(estado) representa as características do Componente/Função em dado momento.</p>
            <p>Exemplo: o botão está ativo, o usuário está na página de login</p>
            <p>um dos principais uso do React está acerca do Estado</p>
        <br></br>
            <p>Pois bem, agora vamos entender a necessidade de controlar este Estado:</p>
            <p>Observe duas coisas:</p>
            <p>1 - O botão abaixo a cada clique deve(deveria) mudar para 'Botão Ativo/Inativo' e <code>console.log</code> de qual o valor da variável <code>estado</code></p>
            <p>2 - Dentro do <code>console.log</code> a variável <code>estado</code> retorna corretamente seu novo valor, mas na DOM o valor não é atualizado</p>
            <button disabled={!estado} onClick={handleClick}>Botão {estado ? 'ativo, clique para mudar' : 'inativo, clique para mudar'}</button>
            <p>É neste furo da DOM não ser atualizada que precisamos do React para facilmente atualizar o HTML</p>
        </>
    )

}

export default Component