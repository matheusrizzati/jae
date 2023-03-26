import './App.css'
import Login from './components/Login'
import Escolha from './components/Escolha'
import ValidarCupom from './components/ValidarCupom'
import {useState} from 'react'
function App() {
  const trocarTela = (tela) => {
    setTela(tela)
  }

  const [tela, setTela] = useState('Login')
  return (
    <>
    {(tela === 'Login') &&
    <Login trocarTela={trocarTela}/>
    }
    {(tela === 'Escolha') &&
    <Escolha trocarTela={trocarTela}/>
    }
    {(tela === 'ValidarCupom') &&
    <ValidarCupom/>
    }
    </>
  );
}

export default App;
