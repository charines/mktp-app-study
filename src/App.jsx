// App.jsx
import { useEffect, useState } from 'react';
import './App.css';
import Secao1 from './components/Secao1';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Ofertas from './components/Ofertas';
import EntendaMais from './components/EntendaMais';
import Footer from './components/footer';

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

  // Carrega dados iniciais e verifica se estão completos
  useEffect(() => {
    const storedData = carregarDadosDoStorage();
    const dadosCompletos =
      storedData.valorIPVA &&
      storedData.descontoVista &&
      storedData.jurosMensal &&
      storedData.parcelas &&
      storedData.nome &&
      storedData.email &&
      storedData.cidade &&
      storedData.estado;

    if (dadosCompletos && storedData.showresult === 'sim') {
      setDados(storedData);
      setMostrarResultado(true);
    } else {
      setMostrarResultado(false);
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

    const dadosCompletos =
      novosDados.valorIPVA &&
      novosDados.descontoVista &&
      novosDados.jurosMensal &&
      novosDados.parcelas &&
      novosDados.nome &&
      novosDados.email &&
      novosDados.cidade &&
      novosDados.estado;

    if (dadosCompletos) {
      setMostrarResultado(true);
      localStorage.setItem('showresult', 'sim');
    } else {
      setMostrarResultado(false);
    }
  };

  return (
    <>
      <Secao1 />
      {!mostrarResultado && (
        <Formulario
          onCalcular={handleCalcular}
          dadosIniciais={dados} // Passa dados carregados para o formulário e modal
        />
      )}
      {mostrarResultado && dados && <Resultado dados={dados} />}
      <Ofertas />
      <EntendaMais />
      <Footer />
    </>
  );
}

export default App;
