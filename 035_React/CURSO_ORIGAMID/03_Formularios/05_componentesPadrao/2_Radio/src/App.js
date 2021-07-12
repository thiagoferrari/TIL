import { useState } from 'react';
import './App.css';

import Input from './Form/Input'
import Radio from './Form/Radio';
import Select from './Form/Select';

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const [produto, setProduto] = useState('')

  const [cor, setCor] = useState('Anil')
  const [frutas, setFrutas] = useState('Limão')

  return (
    <form>
      <b>Cores:</b>
      <Radio options={['Azul', 'Anil', 'Amarelo']}
        value={cor} setValue={setCor} />
      <br />
      <b>Frutas:</b>
      <Radio options={['Limão', 'Laranja', 'Uva']}
        value={frutas} setValue={setFrutas} />
      <br />
      <br />

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