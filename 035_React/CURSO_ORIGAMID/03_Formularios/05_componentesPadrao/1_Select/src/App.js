import { useState } from 'react';
import './App.css';

import Input from './Form/Input'
import Select from './Form/Select';

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')

  return (
    <form>
      <Select options={['smartphone', 'tablet']}
        value={produto} setValue={setProduto} />

      < Input label='Nome' id='n'
        setValue={setNome} value={nome} />

      <Input label='Email' id='e'
        setValue={setEmail} value={email} />

      <button>Enviar</button>
    </form>
  )
}

export default App;