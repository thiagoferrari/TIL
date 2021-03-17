import React from "react"

const Component = () => {

    let estado = true

    // inverter estado do botão caso clicado
    let handleClick = () => {
        estado = !estado
        console.log('estado dentro do console: ', estado);
    }

    return (
        <>
            <h1>Motivo de Usar Estado:</h1>
            <p>O State(estado) representa as características do Componente/Função em dado momento.</p>
            <p>Exemplo: o botão está ativo, o usuário está na página de login</p>
            <p>um dos principais uso do React está acerca do Estado</p>
            <br></br>
            <p>Pois bem, agora vamos entender a necessidade de controlar o Estado:</p>
            <p>Observe duas coisas:</p>
            <p>1 - O botão abaixo a cada clique deve(deveria) mudar/atualizar para 'Botão Ativo/Inativo', mas isso não ocorre! </p>
            <p>2 - Dentro do <code>console.log</code> a variável <code>estado</code> retorna corretamente seu novo valor (Isto também deveria ocorrer dentro botão)</p>

            <fieldset>
                <div>Clique para mudar: (Ativo / Inativo)</div>
                <button onClick={handleClick}>Botão {estado ? 'ativo' : 'inativo'}</button>
            </fieldset>
            <p>É neste furo da DOM não ser atualizada que precisamos do React para facilmente atualizar o HTML: aqui entra os hooks </p>

            <hr></hr>

            <h1>Como o estado realmente trabalha:</h1>
            <p>Para que na DOM tenhamos uma atualização do conteúdo, precisamos usar os Hooks(React), veja no próxima .js o que é.</p>
        </>

    )

}

export default Component