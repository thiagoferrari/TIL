import React from 'react'
import { GlobalContext } from "./GlobalContext";

const Pessoa = () => {
    const global = React.useContext(GlobalContext)
    return <div>Pessoa: {global.nome}</div>
}

export default Pessoa