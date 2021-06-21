import logo from './logo.svg';
import './App.css';
import Pessoa from './Components/Pessoa'
import { GlobalStorage } from "./Components/GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <Pessoa />
    </GlobalStorage>
  );
}

export default App;