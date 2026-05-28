import { useState, useEffect } from 'react'
import {getTotalEntradas, getTotalSaidas, getSaldo} from "../services/api"

function CardsGerais(){
    const [entradas, setEntradas] = useState(0)
    const [saidas, setSaidas] = useState(0)
    const [saldo, setSaldo] = useState('')

    useEffect (() => {
        const buscarInformacoes = async () => {
            const [e, s, sal] = await Promise.all([
                getTotalEntradas(),
                getTotalSaidas(),
                getSaldo()
            ])
            setEntradas(e)
            setSaidas(s)
            setSaldo(sal)
        }
        buscarInformacoes()
    }, [])

    return(
        <>
            <h2>Resumo</h2>
            <p>Total de entradas: R$ {entradas}</p>
            <p>Total de saídas: R$ {saidas}</p>
            <p>Saldo: {saldo}</p>
        </>
    )

}

export default CardsGerais