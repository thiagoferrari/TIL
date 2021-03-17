import React from 'react'
import Header from './Header'
import Home from './Home';
import Produtos from './Produtos';


function App() {
  const { pathname } = window.location

  return (
    <div>
      <Header />
      {(pathname == '/') ? <Home /> : <Produtos />}
    </div>
  );
}

export default App;