import { useState } from 'react'

function CheckBoxArray() {

    const coresArray = ['azul', 'amarelo', 'verde', 'vermelho', 'laranja']
    const [cores, setCores] = useState(['verde','laranja'])

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

    return (<form>
        {coresArray.map((cor, index) => (
            <label key={index}>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    value={cor}
                    checked={cores.includes(cor)}
                />
                {cor}
            </label>
        ))}
    </form>
    )
}

export default CheckBoxArray