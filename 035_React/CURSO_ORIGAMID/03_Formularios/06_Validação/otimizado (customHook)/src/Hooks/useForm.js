import { useState } from "react"

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        msg: 'cep inválido'
    },
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        msg: 'email inválido'
    }
}

const useForm = (type) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    function validate(value) {
        if (value.length === 0) {
            setError('Preencha um valor')
            return false

            /* ver se types é true: para dar certo o Input nome */
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(!types[type].msg)
            return false

        } else {
            setError(null)
            return true //se deu certo
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value)
        setValue(target.value)
    }

    return ({
        value, setValue, onChange, error,

        // quando eu clicar fora, ele já vai validar:
        onBlur: () => validate(value),

        // quando eu clicar em btn 'Enviar', executar:
        validate: () => validate(value)
    })
}

export default useForm