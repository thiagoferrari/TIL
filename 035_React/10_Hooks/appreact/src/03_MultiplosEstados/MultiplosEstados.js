import React from 'react'

const MultiplosEstados = () => {

    /* AGORA VAMOS VER MAIS UM EXEMPLO COM O useState(): */

    const [ativo, setAtivo] = React.useState(true)
    /* aqui temos uma desestruturação:
        * [ativo] é o estado controlado
        * [setAtivo] a função capaz de setar/alterar os dados/estado de [ativo]
    */

    return (<>
        <h1>MultiplosEstados</h1>
        <p></p>

        <fieldset>
            <div>Clique para mudar: (Ativo / Inativo)</div>
            <button onClick={() => setAtivo(!ativo)}>
                Botão {ativo ? 'ativo' : 'inativo'}
            </button>
        </fieldset>


    </>)
}

export default MultiplosEstados