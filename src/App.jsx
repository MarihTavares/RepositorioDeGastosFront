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
      <Cards key={`cards-${atualizar}`}/>
      <Formulario onAdicionar={handlerAtualizar}/>
      <Lancamentos key={`lancamentos-${atualizar}`}/>
      <Media key={`media-${atualizar}`}/>
    </>
  )
}

export default App
