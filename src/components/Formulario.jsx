import { useState } from 'react';
import ModalForm from './ModalForm';

function Formulario({ onCalcular }) {
  const [valorIPVA, setValorIPVA] = useState('');
  const [descontoVista, setDescontoVista] = useState('');
  const [jurosMensal, setJurosMensal] = useState('');
  const [parcelas, setParcelas] = useState(5);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Formatação do Valor do IPVA
  const formatarValorIPVA = (valor) => {
    const numericValue = valor.replace(/[^\d]/g, ''); // Remove tudo que não for número
    const floatValue = parseFloat(numericValue) / 100;
    if (!isNaN(floatValue)) {
      return floatValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      });
    }
    return '';
  };

  const handleValorIPVAChange = (e) => {
    const valor = e.target.value;
    const numericValue = valor.replace(/[^\d]/g, '');
    setValorIPVA(formatarValorIPVA(numericValue));
  };

  // Tratamento para Desconto e Juros
  const handleDecimalChange = (e, setter) => {
    let valor = e.target.value.replace(/[^0-9,]/g, ''); // Permite apenas números e vírgula
    if (valor.includes(',')) {
      const [int, dec] = valor.split(',');
      valor = `${int},${dec.slice(0, 2)}`; // Limita a 2 casas decimais
    }
    setter(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valorIPVA && descontoVista && jurosMensal && parcelas) {
      openModal();
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  };

  return (
    <section className="py-8 bg-base-200">
      <div className="container mx-auto px-4 text-center max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4" id="formulario">
          Preencha os Dados do IPVA
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          {/* Valor do IPVA */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Valor do IPVA (R$)</span>
            </div>
            <input
              type="text"
              placeholder="Digite o valor do IPVA"
              value={valorIPVA}
              onChange={handleValorIPVAChange}
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* Desconto à Vista */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Desconto em %</span>
            </div>
            <input
              type="text"
              placeholder="Desconto à Vista (%)"
              value={descontoVista}
              onChange={(e) => handleDecimalChange(e, setDescontoVista)}
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* Juros Mensais */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Juros Mensais em %</span>
            </div>
            <input
              type="text"
              placeholder="Juros Mensais (%)"
              value={jurosMensal}
              onChange={(e) => handleDecimalChange(e, setJurosMensal)}
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* Quantidade de Parcelas */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Quantidade de Parcelas</span>
            </div>
            <input
              type="number"
              placeholder="Quantidade de Parcelas"
              value={parcelas}
              onChange={(e) => setParcelas(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* Botão de Envio */}
          <button type="submit" className="btn btn-primary w-full">
            Continuar
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <ModalForm
            onClose={closeModal}
            onCalcular={() => {
              closeModal();
              onCalcular({
                valorIPVA: parseFloat(valorIPVA.replace(/[^\d,]/g, '').replace(',', '.')),
                descontoVista: parseFloat(descontoVista.replace(',', '.')),
                jurosMensal: parseFloat(jurosMensal.replace(',', '.')),
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
