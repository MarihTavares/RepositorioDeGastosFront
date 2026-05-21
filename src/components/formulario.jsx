import { useState } from 'react'
import { adicionarLancamento as adicionarLancamentoApi } from '../services/api'

function Formulario(){
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tipo, setTipo] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleChange = (e) => {
        const raw = e.target.value;

        const num = Number(raw); // Retorna um number ao invés de uma String
        if (num < 0) return;             

        setValor(num);
    };

    const adicionarLancamento = async () => {
    if (!descricao)  return alert('Informe a descrição');
    if (!valor)      return alert('Informe o valor');
    if (!categoria)  return alert('Selecione a categoria');
    if (!tipo)       return alert('Selecione o tipo');

    await adicionarLancamentoApi({descricao, valor, categoria, tipo})

    setDescricao('');
    setValor('');
    setCategoria('')
    setTipo('');
    setMensagem('Lançamento adicionado com sucesso!');
    setTimeout(() => setMensagem(''), 3000);
  }

  return (
    <>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição do lançamento:"
      />

      <input
        type='number'
        value={valor}
        onChange={handleChange}
        min={0}
        placeholder='Valor:'
      />

      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Selecione a categoria:</option>
        <option value="ALIMENTACAO">ALIMENTAÇÃO</option>
        <option value="TRABALHO">TRABALHO</option>
        <option value="TRANSPORTE">TRANSPORTE</option>
        <option value="MORADIA">MORADIA</option>
        <option value="SAUDE">SAÚDE</option>
        <option value="LAZER">LAZER</option>
      </select>

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione o tipo:</option>
        <option value="ENTRADA">ENTRADA</option>
        <option value="SAIDA">SAÍDA</option>
      </select>

      <button onClick={adicionarLancamento}>Enviar</button>
      {mensagem && <p>{mensagem}</p>}

    </>
  )
  
}
export default Formulario