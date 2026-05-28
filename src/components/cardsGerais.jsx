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
        <div class="container">
            <p class="col-5 text-start px-1 mb-0 fw-bold fs-4">Orçamento pessoal</p>
            <p class="col-4 text-start px-1 fw-light fs-6">Controle de gastos - Entradas e Saídas</p>

            <div className="row mb-3 mt-3">
                <div class="card" className="col-4">
                    <div class="card-body" >
                        Total de entradas:
                    </div>

                    <div class="card-body">
                        R$ {entradas}
                    </div>
                </div>

                <div class="card" className="col-4">
                    <div class="card-body" >
                        Total de saídas:
                    </div>

                    <div class="card-body">
                        R$ {saidas}
                    </div>
                </div>

                <div class="card" className="col-4">
                    <div class="card-body" >
                        Saldo:
                    </div>
                    
                    <div class="card-body">
                        {saldo}
                    </div>
                </div>
            </div>    

        </div>
    )

}

export default CardsGerais