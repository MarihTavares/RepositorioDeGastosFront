import { useState, useEffect } from "react";
import { getLancamentos } from "../services/api";

function Lancamentos() {
  const [lancamentos, setLancamentos] = useState([]);

  useEffect(() => {
    const buscarLancamento = async () => {
      const l = await getLancamentos();
      setLancamentos(l);
    };
    buscarLancamento();
  }, []);

  const corSaldo = (tipo) => {
    if (tipo === "ENTRADA") return "cards_entrada";
    if (tipo === "SAIDA") return "cards_saida";
  };

  return (
    <div className="container p-2 mt-3" id="formulario">
      <div className="row px-3 titulo">
        {" "}
        <p>Lançamentos</p>{" "}
      </div>
      <div className="row px-3">
        {lancamentos.map((l, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center px-3 lancamento-item"
          >
            <div>
              <p className="m-0 fw-bold">{l.descricao}</p>
              <p className="mb-1 subtitulo">{l.categoria}</p>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span
                className={`tag_tipo ${l.tipo === "ENTRADA" ? "tag_entrada" : "tag_saida"}`}
              >
                {l.tipo === "ENTRADA" ? "Entrada" : "Saída"}
              </span>
              <span className={corSaldo(l.tipo)}>R$ {l.valor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lancamentos;
