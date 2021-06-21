import React from 'react'
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
    const global = React.useContext(GlobalContext)
    return <div>Pessoa: {global.nome}</div>
}

export default Produto