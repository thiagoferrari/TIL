import { useState } from 'react'

function CheckBoxSimples() {
    const [termos, setTermos] = useState(false)

    function handleChange({ target }) {
        setTermos(target.checked)
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    value='Termos'
                    checked={termos}
                />
                Aceito os termos.
            </label>
        </form>
    )
}

export default CheckBoxSimples