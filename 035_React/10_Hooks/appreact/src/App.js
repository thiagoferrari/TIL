import React from 'react'
import Paths from './Paths';
import Component from './01_Estado/Estado'
import Hooks from './02_Hooks/Hooks'
import Help from './00_Help/Help'

function App() {

  const { pathname } = window.location

  switch (pathname) {
    case '/00_Help':
      return <Help />

    case '/01_Estado':
      return <Component />

    case '/02_Hooks':
      return <Hooks />

    default: // pathname = '/'
      return (
        <>
          <h3>Bem vindo a este router de estudos, escolha um link:</h3>

          <div><a href="00_Help">00 - Help</a></div>
          <div><a href="01_Estado">01 - Estado</a></div>
          <div><a href="02_Hooks">02 - Hooks</a></div>
        </>
      )
  }

}

export default App;