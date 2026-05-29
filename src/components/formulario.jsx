import { useState } from "react";
import { adicionarLancamento as adicionarLancamentoApi } from "../services/api";
import { FaPlus } from "react-icons/fa";

function Formulario({ onAdicionar }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const raw = e.target.value;

    const num = Number(raw); // Retorna um number ao invés de uma String
    if (num < 0) return;

    setValor(num);
  };

  const adicionarLancamento = async () => {
    if (!descricao) return alert("Informe a descrição");
    if (!valor) return alert("Informe o valor");
    if (!categoria) return alert("Selecione a categoria");
    if (!tipo) return alert("Selecione o tipo");

    await adicionarLancamentoApi({ descricao, valor, categoria, tipo });
    onAdicionar();

    setDescricao("");
    setValor("");
    setCategoria("");
    setTipo("");
    setMensagem("Lançamento adicionado com sucesso!");
    setTimeout(() => setMensagem(""), 3000);
  };

  return (
    <div className="container py-4 estrutura_card">
      <div className="row mb-3">
        <p className="col-2 text-start mx-3 mb-1">Novo lançamento</p>
      </div>

      <div className="row justify-content-center m-0 p-0">
        <div className="mb-3 col-6">
          <label className="titulo mx-1">Descrição</label>
          <div>
            <input
              type="text"
              className="input"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 col-6">
          <label className="titulo mx-1">Valor</label>
          <div>
            <input
              type="number"
              className="input"
              value={valor}
              onChange={handleChange}
              min={0}
            />
          </div>
        </div>
      </div>

      <div className="row justify-content-around m-0">
        <div className="col-6">
          <select
            className="form-select input"
            id="floatingSelect"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione a categoria:</option>
            <option value="ALIMENTACAO">ALIMENTAÇÃO</option>
            <option value="TRABALHO">TRABALHO</option>
            <option value="TRANSPORTE">TRANSPORTE</option>
            <option value="MORADIA">MORADIA</option>
            <option value="SAUDE">SAÚDE</option>
            <option value="LAZER">LAZER</option>
          </select>
        </div>

        <div className="col-6">
          <select
            className="form-select input"
            id="floatingSelect"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Selecione o tipo:</option>
            <option value="ENTRADA">ENTRADA</option>
            <option value="SAIDA">SAÍDA</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-5 mb-2">
        <button
          className="col-6 align-items-center justify-content-center"
          id="botao"
          onClick={adicionarLancamento}
        >
          <FaPlus className="me-1" /> Adicionar lançamento
        </button>
      </div>

      {mensagem && (
        <div className="row justify-content-center mt-2">
          <p className="text-center text-success mb-0">{mensagem}</p>
        </div>
      )}
    </div>
  );
}
export default Formulario;
