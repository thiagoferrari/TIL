import logo from './logo.svg';
import './App.css';
import Produto from './Components/Produto'
import { GlobalStorage } from "./Components/GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
}

export default App;