import { useState, useEffect } from 'react'
import { getLancamentos, getMedias } from '../services/api'

function Resumo() {
  const [lancamentos, setLancamentos] = useState([])
  const [medias, setMedias] = useState({})

  useEffect(() => {
    const buscarResumo = async () => {
      const [l, m] = await Promise.all([
          getLancamentos(),
          getMedias()
      ])
      console.log(l)
      setLancamentos(l)
      setMedias(m)
    }
    buscarResumo()
  }, []);

  return (
    <>
      <h2>Lançamentos</h2>
      {lancamentos.map((l, i) => (
      <p key={i}>{l.descricao} - R$ {l.valor} - {l.categoria} - {l.tipo}</p>
      ))}

      <h2>Média por categoria</h2>
      {Object.entries(medias).map(([cat, media]) => (
      <p key={cat}>{cat}: R$ {media.toFixed(2)}</p>
      ))}
    </>
  )
}

export default Resumo