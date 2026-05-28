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
        <div class="container py-3">
            <p class="col-5 text-start p-2 mb-0 fw-bold fs-4">Orçamento pessoal</p>
            <p class="col-4 text-start px-2 fw-light fs-6 fst-italic">Controle de gastos - Entradas e Saídas</p>

            <div class="row mb-3 mt-3 pt-3 justify-content-around">
                <div class="card col-2 cards">
                    <div class="card-body pb-0 pt-4 cards_titulo">
                        Entradas
                    </div>

                    <div class="card-body fs-3 cards_entrada">
                        R$ {entradas}
                    </div>
                </div>

                <div class="card col-2 cards">
                    <div class="card-body pb-0 pt-4 cards_titulo" >
                        Saídas
                    </div>

                    <div class="card-body fs-3 cards_saida">
                        R$ {saidas}
                    </div>
                </div>

                <div class="card col-2 cards">
                    <div class="card-body pb-0 pt-4 cards_titulo" >
                        Saldo
                    </div>
                    
                    <div class="card-body fs-3 cards_saldo">
                        R$ {saldo}
                    </div>
                </div>
            </div>    

        </div>
    )

}

export default CardsGerais