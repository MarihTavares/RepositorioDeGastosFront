import { useState, useEffect } from "react";
import { getTotalEntradas, getTotalSaidas, getSaldo } from "../services/api";

function CardsGerais() {
  const [entradas, setEntradas] = useState(0);
  const [saidas, setSaidas] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const buscarInformacoes = async () => {
      const [e, s, sal] = await Promise.all([
        getTotalEntradas(),
        getTotalSaidas(),
        getSaldo(),
      ]);
      setEntradas(e);
      setSaidas(s);
      setSaldo(sal);
    };
    buscarInformacoes();
  }, []);

  return (
    <div className="container py-3">
      <p className="col-5 text-start p-2 mb-0 fw-bold fs-4">
        Orçamento pessoal
      </p>
      <p className="col-4 text-start px-2 fw-light fs-6 fst-italic">
        Controle de gastos - Entradas e Saídas
      </p>

      <div className="row mb-3 mt-3 pt-3 justify-content-around">
        <div className="card col-2 cards">
          <div className="card-body pb-0 pt-4 cards_titulo">Entradas</div>

          <div className="card-body fs-3 cards_entrada">R$ {entradas.toFixed(2)}</div>
        </div>

        <div className="card col-2 cards">
          <div className="card-body pb-0 pt-4 cards_titulo">Saídas</div>

          <div className="card-body fs-3 cards_saida">R$ {saidas.toFixed(2)}</div>
        </div>

        <div className="card col-2 cards">
          <div className="card-body pb-0 pt-4 cards_titulo">Saldo</div>

          <div className="card-body fs-3 cards_saldo">R$ {saldo.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardsGerais;
