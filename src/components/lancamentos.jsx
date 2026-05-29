import { useState, useEffect } from 'react'
import { getLancamentos } from '../services/api'

function Lancamentos() {
  const [lancamentos, setLancamentos] = useState([])

  useEffect(() => {
    const buscarLancamento = async () => {
      const l = await getLancamentos()
      setLancamentos(l)
    }
    buscarLancamento()
  }, []);

  return (
    <div class="container py-4">

      <div id="formulario" class="col-12">
        <div class="row"> <p>Lançamentos</p> </div>
        <div class="row">
          {lancamentos.map((l, i) => (
            <p key={i}>{l.descricao} - R$ {l.valor} - {l.categoria} - {l.tipo}</p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Lancamentos