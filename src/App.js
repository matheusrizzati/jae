import './App.css'
import Login from './components/Login'
import Escolha from './components/Escolha'
import {useState} from 'react'
function App() {
  const trocarTela = (tela) => {
    setTela(tela)
  }

  const [tela, setTela] = useState('Escolha')
  return (
    <>
    {(tela === 'Login') &&
    <Login trocarTela={trocarTela}/>
    }
    {(tela === 'Escolha') &&
    <Escolha trocarTela={trocarTela}/>
    }
    </>
  );
}

export default App;
