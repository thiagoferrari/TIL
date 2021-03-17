import React from 'react'
import produtos from './dados/array'

const Produtos = props => {
    let produtosDOM = produtos
        .map(
            (p, index) =>
                <fieldset key={index}>
                    <legend key={p.nome}>{p.nome}</legend>
                    <ul>
                        {p.propriedades.map(i => <li key={i}>{i}</li>)}
                    </ul>
                </fieldset>
        )
    return (
        <>
            <h1>Produtos</h1>
            {produtosDOM}
        </>
    )

}

export default Produtos