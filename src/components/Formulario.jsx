import { useState, useEffect } from 'react';
import ModalForm from './ModalForm';

function Formulario({ onCalcular }) {
  const [valorIPVA, setValorIPVA] = useState('');
  const [descontoVista, setDescontoVista] = useState('');
  const [jurosMensal, setJurosMensal] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Carregar valores do LocalStorage apenas uma vez ao montar o componente
  useEffect(() => {
    const storedValorIPVA = localStorage.getItem('valorIPVA');
    const storedDescontoVista = localStorage.getItem('descontoVista');
    const storedJurosMensal = localStorage.getItem('jurosMensal');
    const storedParcelas = localStorage.getItem('parcelas');

    setValorIPVA(storedValorIPVA ? parseFloat(storedValorIPVA).toFixed(2) : '');
    setDescontoVista(storedDescontoVista ? parseFloat(storedDescontoVista).toFixed(2) : '');
    setJurosMensal(storedJurosMensal ? parseFloat(storedJurosMensal).toFixed(2) : '');
    setParcelas(storedParcelas ? parseInt(storedParcelas, 10) : '');
  }, []);

  // Atualizar LocalStorage e chamar o cálculo quando houver alterações nos valores
  useEffect(() => {
    if (valorIPVA && descontoVista && jurosMensal && parcelas) {
      localStorage.setItem('valorIPVA', parseFloat(valorIPVA).toString());
      localStorage.setItem('descontoVista', parseFloat(descontoVista).toString());
      localStorage.setItem('jurosMensal', parseFloat(jurosMensal).toString());
      localStorage.setItem('parcelas', parcelas.toString());

      // Realizar o cálculo automaticamente
      onCalcular({
        valorIPVA: parseFloat(valorIPVA),
        descontoVista: parseFloat(descontoVista),
        jurosMensal: parseFloat(jurosMensal),
        parcelas,
      });
    }
  }, [valorIPVA, descontoVista, jurosMensal, parcelas, onCalcular]);

  // Manipuladores de entrada com validação e formatação
  const handleNumericInput = (e, setter) => {
    let valor = e.target.value.replace(/[^\d]/g, ''); // Remove tudo que não for número
    if (valor === '') {
      setter(''); // Permite apagar o campo
      return;
    }

    valor = (parseFloat(valor) / 100).toFixed(2); // Adiciona duas casas decimais
    setter(valor);
  };

  const handleParcelasChange = (e) => {
    const valor = parseInt(e.target.value, 10) || 0;
    setParcelas(valor);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="py-8 bg-base-200">
      <div className="container mx-auto px-4 text-center max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4" id="questionario">Preencha os Dados do IPVA</h2>
        <form className="space-y-4 w-full">
          {/* Valor do IPVA */}
          <label className="form-control w-full">
            <span className="label-text">Valor do IPVA (R$)</span>
            <input
              type="text"
              value={valorIPVA}
              onChange={(e) => handleNumericInput(e, setValorIPVA)}
              className="input input-bordered w-full"
            />
          </label>

          {/* Desconto à Vista */}
          <label className="form-control w-full">
            <span className="label-text">Desconto em %</span>
            <input
              type="text"
              value={descontoVista}
              onChange={(e) => handleNumericInput(e, setDescontoVista)}
              className="input input-bordered w-full"
            />
          </label>

          {/* Juros Mensais */}
          <label className="form-control w-full">
            <span className="label-text">Juros Mensais em %</span>
            <input
              type="text"
              value={jurosMensal}
              onChange={(e) => handleNumericInput(e, setJurosMensal)}
              className="input input-bordered w-full"
            />
          </label>

          {/* Quantidade de Parcelas */}
          <label className="form-control w-full">
            <span className="label-text">Quantidade de Parcelas</span>
            <input
              type="number"
              value={parcelas}
              onChange={handleParcelasChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Botão para abrir o Modal */}
          <button
            type="button"
            onClick={openModal}
            className="btn btn-secondary w-full mt-4"
          >
            Realizar Simulação
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <ModalForm
            onClose={closeModal}
            onCalcular={() => {
              closeModal();
              onCalcular({
                valorIPVA: parseFloat(valorIPVA),
                descontoVista: parseFloat(descontoVista),
                jurosMensal: parseFloat(jurosMensal),
                parcelas,
              });
            }}
          />
        )}
      </div>
    </section>
  );
}

export default Formulario;
