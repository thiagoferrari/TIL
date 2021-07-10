import { useState } from 'react'

function CheckBoxArray() {

    /*objetivo: usar array para armazenar o valor de vários checks*/

    const [cores, setCores] = useState(['verde'])

    function handleChange({ target }) {
        /* se algum check for marcado,
        ele será ADICIONADO ao array: */
        if (target.checked) {
            setCores([...cores, target.value])
        } else {
            /* se algum check for desmarcado,
            ele será REMOVIDO ao array (com filter): */
            setCores(cores.filter(cor => cor !== target.value))
        }
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    value='azul'
                    checked={cores.includes('azul')}
                />
                azul
            </label>
            <label>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    value='vermelho'
                    checked={cores.includes('vermelho')}
                />
                vermelho
            </label>
            <label>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    value='verde'
                    checked={cores.includes('verde')}
                />
                verde
            </label>
        </form>
    )
}

export default CheckBoxArray