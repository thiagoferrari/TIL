import { useState } from 'react';
import './App.css';

import Input from './Form/Input'
import useForm from './Hooks/useForm';

function App() {
  const nome = useForm()
  const cep = useForm('cep')
  const email = useForm('email')

  function handleSubmit(event) {
    event.preventDefault()
    if (cep.validate()) {
      console.log('Enviou, fazer fetch(), etc...')
    } else {
      console.log('Não enviar, mostrar erro ao user')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Nome' id='nome'
        type='text'
        {...nome}
      />

      <Input
        label='CEP' id='cep'
        type='text' placeholder='00000-000'
        {...cep}
      />

      <Input
        label='Email' id='email'
        type='text'
        {...email}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App;