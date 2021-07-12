import { useState } from 'react';
import './App.css';
import Input from './Form/Input'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <Input label='Nome' id='n'
        setValue={setNome} value={nome} />

      <Input label='Email' id='e'
        setValue={setEmail} value={email} />
    </>
  )
}

export default App;