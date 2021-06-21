import React from 'react'
import { GlobalContext } from "./GlobalContext";

const Pessoa = () => {
    const global = React.useContext(GlobalContext)
    return (
        <div>
            Pessoas: {global.contar}
            <br />
            <button onClick={() => global.adicionar1()}>+1</button>
            <button onClick={() => global.adicionar2()}>+2</button>
        </div>

    )
}

export default Pessoa