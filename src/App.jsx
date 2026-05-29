import { useState } from 'react'
import './App.css'
import Formulario from './components/formulario'
import Lancamentos from './components/lancamentos'
import Cards from './components/cardsGerais'
import Media from './components/media'

function App() {
  const [atualizar, setAtualizar] = useState(0)

  const handlerAtualizar = () => {
    setAtualizar(a => a + 1)
  }

  return(
    <>
      <Cards key={atualizar}/>
      <Formulario onAdicionar={handlerAtualizar}/>
      <Lancamentos key={atualizar}/>
      <Media key={atualizar}/>
    </>
  )
}

export default App
