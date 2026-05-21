import { useState } from 'react'
import { getLancamentos, getTotalEntradas, getTotalSaidas, getSaldo, getMedias } from '../services/api'

function Resumo() {
  const [lancamentos, setLancamentos] = useState([])
  const [entradas, setEntradas] = useState(0)
  const [saidas, setSaidas] = useState(0)
  const [saldo, setSaldo] = useState('')
  const [medias, setMedias] = useState({})

  const buscarResumo = async () => {
    const [l, e, s, sal, m] = await Promise.all([
        getLancamentos(),
        getTotalEntradas(),
        getTotalSaidas(),
        getSaldo(),
        getMedias()
    ])
    console.log(l)
    setLancamentos(l)
    setEntradas(e)
    setSaidas(s)
    setSaldo(sal)
    setMedias(m)
}

  return (
    <>
    <button onClick={buscarResumo}>Atualizar resumo</button>
    <h2>Resumo</h2>
    <p>Total de entradas: R$ {entradas}</p>
    <p>Total de saídas: R$ {saidas}</p>
    <p>Saldo: {saldo}</p>

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