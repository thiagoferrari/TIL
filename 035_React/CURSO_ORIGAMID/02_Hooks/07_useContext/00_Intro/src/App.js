import logo from './logo.svg';
import './App.css';
import UserContext from './Components/UserContext'
import Produto from './Components/Produto'


function App() {
  return (
    <UserContext.Provider value={{ nome: "Thiago" }}>
      <Produto />
    </UserContext.Provider>

  );
}

export default App;