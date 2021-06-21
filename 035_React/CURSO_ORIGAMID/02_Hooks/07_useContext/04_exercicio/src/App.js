import './App.css';
import Produto from './Components/Produto'
import { GlobalStorage } from "./Components/GlobalContext";
import Limpar from './Components/Limpar';

function App() {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
}

export default App;