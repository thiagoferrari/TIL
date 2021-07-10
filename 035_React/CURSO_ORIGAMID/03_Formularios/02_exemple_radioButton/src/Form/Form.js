import { useState } from 'react'

function Form() {
    const [produto, setProduto] = useState(null)

    function handleChange({ target }) {
        setProduto(target.value)
    }

    return (
        <form>
            <label>
                <input
                    type="radio"
                    onChange={handleChange}
                    value='celular'
                    checked={produto === 'celular'}
                //name='opções' /*name pode ser substituído por checked ===*/
                />
                celular
            </label>
            <label>
                <input
                    type="radio"
                    value='tablet'
                    onChange={handleChange}
                    checked={produto === 'tablet'}
                //name='opções' /*name pode ser substituído por checked ===*/
                />
                tablet
            </label>
        </form>
    )
}

export default Form