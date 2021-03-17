import React from 'react'

// abaixo temos o spread (usado quando não sabemos quantas proprie. o container pode ter)
const Input = props => {

    const { texto, id, ...outros } = props

    return (
        <div>
            <label htmlFor={id}>
                {texto}
            </label>
            <input id={id} type="text" {...outros}  /*em outros entra todos props passados
                                                        lá no <Form /> depois de id*/ />
        </div>
    )
}

export default Input