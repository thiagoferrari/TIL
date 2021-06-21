import './App.css';
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  /*                                          key:produto, inicial: null */

  function handleClick({ target }) {
    setProduto(target.innerHTML)
  }

  return (
    <div>
      <h1>Produto predileto: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>ipod</button>
    </div>
  );
}

export default App;