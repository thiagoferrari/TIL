import React from 'react'
import Help from './00_Help/Help'
import Paths from './Paths';
import Component from './01_Estado/Estado'
import Hooks from './02_Hooks/Hooks'
import MultiplosEstados from './03_MultiplosEstados/MultiplosEstados';
import PropsEstados from './04_Props+Estados/PropsEstados';

function App() {

  const { pathname } = window.location

  switch (pathname) {
    case '/00_Help':
      return <Help />

    case '/01_Estado':
      return <Component />

    case '/02_Hooks':
      return <Hooks />

    case '/03_MultiplosEstados':
      return <MultiplosEstados />

    case '/04_Props+Estados':
      return <PropsEstados />

    default: // pathname = '/'
      return (
        <>
          <h3>Bem vindo a este router de estudos, escolha um link:</h3>

          <div><a href="00_Help">00 - Help</a></div>
          <div><a href="01_Estado">01 - Estado</a></div>
          <div><a href="02_Hooks">02 - Hooks</a></div>
          <div><a href="03_MultiplosEstados">03 - MultiplosEstados</a></div>
          <div><a href="04_Props+Estados">04 - Props+Estados</a></div>

        </>
      )
  }

}

export default App;