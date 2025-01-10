import { useEffect, useState } from 'react';
import './App.css';
import Secao1 from './components/Secao1';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import HeaderDSOP from './layout/header/HeaderDSOP';

function App() {
  const [dados, setDados] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [parametroShowAnswer, setParametroShowAnswer] = useState(false);

  // Captura parâmetros da URL
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const showAnswer = urlParams.get('show');

    if (showAnswer === 'answer') {
      setParametroShowAnswer(true);
      carregarDadosDoStorage();
    }
  }, []);

  // Carregar dados do LocalStorage
  const carregarDadosDoStorage = () => {
    const valorIPVA = parseFloat(localStorage.getItem('valorIPVA')) || 0;
    const descontoVista = parseFloat(localStorage.getItem('descontoVista')) || 0;
    const jurosMensal = parseFloat(localStorage.getItem('jurosMensal')) || 0;
    const parcelas = parseInt(localStorage.getItem('parcelas'), 10) || 0;

    if (valorIPVA && descontoVista && jurosMensal && parcelas) {
      setDados({
        valorIPVA,
        descontoVista,
        jurosMensal,
        parcelas,
      });
      setMostrarResultado(true);
    }
  };

  // Atualiza os dados quando o formulário salva no estado
  const handleCalcular = (novosDados) => {
    setDados(novosDados);
    setMostrarResultado(true);
  };

  return (
    <>
      <HeaderDSOP />
      <Secao1 />
      <Formulario onCalcular={handleCalcular} />
      {parametroShowAnswer && mostrarResultado && dados && (
        <Resultado dados={dados} />
      )}
    </>
  );
}

export default App;
