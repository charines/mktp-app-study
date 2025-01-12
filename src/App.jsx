// App.jsx
import { useEffect, useState } from 'react';
import './App.css';
import Secao1 from './components/Secao1';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
  const [dados, setDados] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Carrega dados do localStorage
  const carregarDadosDoStorage = () => {
    return {
      valorIPVA: parseFloat(localStorage.getItem('valorIPVA')) || '',
      descontoVista: parseFloat(localStorage.getItem('descontoVista')) || '',
      jurosMensal: parseFloat(localStorage.getItem('jurosMensal')) || '',
      parcelas: parseInt(localStorage.getItem('parcelas'), 10) || '',
      nome: localStorage.getItem('form_nome') || '',
      email: localStorage.getItem('form_email') || '',
      cidade: localStorage.getItem('form_cidade') || '',
      estado: localStorage.getItem('form_estado') || '',
      showresult: localStorage.getItem('showresult') || 'nao',
    };
  };

  // Carrega dados iniciais
  useEffect(() => {
    const storedData = carregarDadosDoStorage();
    if (
      storedData.valorIPVA &&
      storedData.descontoVista &&
      storedData.jurosMensal &&
      storedData.parcelas &&
      storedData.showresult === 'sim'
    ) {
      setDados(storedData);
      setMostrarResultado(true);
    }
  }, []);

  // Salva dados no localStorage e atualiza estado
  const handleCalcular = (novosDados) => {
    Object.entries(novosDados).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    setDados((prevDados) => ({
      ...prevDados,
      ...novosDados,
    }));

    setMostrarResultado(true);
    localStorage.setItem('showresult', 'sim');
  };

  return (
    <>
      <Secao1 />
      <Formulario
        onCalcular={handleCalcular}
        dadosIniciais={dados} // Passa dados carregados para o formulário e modal
      />
      {mostrarResultado && dados && <Resultado dados={dados} />}
    </>
  );
}

export default App;
