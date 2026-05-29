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

  const corSaldo = (tipo) => {
    if (tipo === 'ENTRADA') return 'cards_entrada'
    if (tipo === 'SAIDA') return 'cards_saida'
  }

  return (
    <div class="container p-2 mt-3" id="formulario">

      <div class="row px-3 titulo"> <p>Lançamentos</p> </div>
      <div class="row px-3">
        {lancamentos.map((l, i) => (
          <div key={i} class="d-flex justify-content-between align-items-center px-3 lancamento-item">

            <div>
              <p class="m-0 fw-bold">{l.descricao}</p>
              <p class="mb-1 subtitulo">{l.categoria}</p>
            </div>

            <div class="d-flex align-items-center gap-3">
              <span class={`tag_tipo ${l.tipo === 'ENTRADA' ? 'tag_entrada' : 'tag_saida'}`}>
                {l.tipo === 'ENTRADA' ? 'Entrada' : 'Saída'}
              </span>
              <span class={corSaldo(l.tipo)}>
                R$ {l.valor} 
              </span>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Lancamentos