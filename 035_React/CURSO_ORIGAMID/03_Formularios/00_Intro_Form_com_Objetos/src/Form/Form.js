import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        nome: '',
        email: ''
    })

    function hanldeSubmit(event) {
        event.preventDefault()
        console.log(event)
    }

    function handleChange({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        /* esse [id] recebe o id do input */
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <label htmlFor="nome">Nome: </label>
            <input
                id='nome' type="text"
                name="nome" value={form.nome}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
                type="email" name="email"
                value={form.email} id="email"
                onChange={handleChange}
            />
        </form>
    )
}

export default Form