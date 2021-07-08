import { useEffect, useState } from 'react'

const formFields = [
    { id: 'nome', label: 'nome: ', type: 'text' },
    { id: 'email', label: 'email: ', type: 'email' },
    { id: 'senha', label: 'senha: ', type: 'password' },
    { id: 'cep', label: 'cep: ', type: 'text' },
    { id: 'rua', label: 'rua: ', type: 'text' },
    { id: 'numero', label: 'numero: ', type: 'text' },
    { id: 'bairro', label: 'bairro: ', type: 'text' },
    { id: 'cidade', label: 'cidade: ', type: 'text' },
    { id: 'estado', label: 'estado: ', type: 'text' }
]


function Form() {

    const [response, setResponse] = useState(null)

    /*
    ANTES:
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    })*/


    /* 
    DEPOIS:
    [macete]: vamos aproveitar os id's em formFields
    e retornar (via reduce) um objeto em branco */
    const [form, setForm] = useState(
        formFields.reduce((acc, field) => {
            return {
                ...acc,
                [field.id]: '',
            }
        }, {}),
    )


    function handleSubmit(event) {
        event.preventDefault()
        console.log(form);

        fetch('https://ranekapi.origamid.dev/json/api/usuario/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })
            .then((response) => setResponse(response))

    }

    function handleChange({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        /* esse [id] recebe o id do input,
        e ele serve para referenciar dentro do objeto */
    }

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type }) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} required
                        value={form[id]} onChange={handleChange}
                    />
                </div>
            ))}
            <button>Enviar</button>
            {response && response.ok && <div>Form enviado!</div>}
        </form >
    )
}

export default Form