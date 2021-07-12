import { useState } from 'react';
import './App.css';

import Input from './Form/Input'

function App() {
  const [cep, setCep] = useState('')
  const [error, setError] = useState(null)

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false

    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP correto')
      return false

    } else {
      setError(null)
      return true //se deu certo
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value)
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateCep(cep)) {
      console.log('Enviou, fazer fetch(), etc...')
    } else {
      console.log('Não enviar, mostrar erro ao user')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input onBlur={handleBlur}
        label='CEP' id='cep'
        value={cep} onChange={handleChange}
        type='text' placeholder='00000-000' />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App;