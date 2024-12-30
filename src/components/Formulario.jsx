import { useState } from 'react';
import ModalForm from './ModalForm';

function Formulario({ onCalcular }) {
  const [valorIPVA, setValorIPVA] = useState(15000.01);
  const [descontoVista, setDescontoVista] = useState(3);
  const [jurosMensal, setJurosMensal] = useState(1.53);
  const [parcelas, setParcelas] = useState(5);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Preencha os Dados do IPVA</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <label className="input input-bordered flex items-center gap-2"> IPVA R$ 
          <input
            type="number"
            placeholder="digite aqui o valor do ipva"
            value={valorIPVA}
            onChange={(e) => setValorIPVA(e.target.value)}
            className="grow"
            required
          />
          </label>
          <label className="input input-bordered flex items-center gap-2">Desconto
          <input
            type="number"
            placeholder="Desconto à Vista (%)"
            value={descontoVista}
            onChange={(e) => setDescontoVista(e.target.value)}
            className="grow"
            required
          />
          </label>
          <label className="input input-bordered flex items-center gap-2">Juros          
          <input
            type="number"
            placeholder="Juros Mensais  (%)"
            value={jurosMensal}
            onChange={(e) => setJurosMensal(e.target.value)}
            className="grow"
            required
          /></label>
          <label className="input input-bordered flex items-center gap-2">Parcelas
          <input
            type="number"
            placeholder="Quantidade de Parcelas"
            value={parcelas}
            onChange={(e) => setParcelas(e.target.value)}
            className="grow"
            required
          /></label>
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
                valorIPVA,
                descontoVista,
                jurosMensal,
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
