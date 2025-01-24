import { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import ReCAPTCHA from 'react-google-recaptcha';

function Formulario({ onCalcular, dadosIniciais, utmParams }) {
  const [valorMatEsc, setvalorMatEsc] = useState('');
  const [descontoVista, setDescontoVista] = useState('');
  const [jurosMensal, setJurosMensal] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [hasRecaptcha, setHasRecaptcha] = useState('');
  // Determine the environment and access the environment variable accordingly
  const siteKey = import.meta.env ? import.meta.env.VITE_APP_SITE_KEY : process.env.REACT_APP_SITE_KEY;

  useEffect(() => {
    // Prioriza dadosIniciais se fornecidos, senão utiliza valores do localStorage
    setvalorMatEsc(dadosIniciais?.valorMatEsc || localStorage.getItem('valorMatEsc') || '');
    setDescontoVista(dadosIniciais?.descontoVista || localStorage.getItem('descontoVista') || '');
    setJurosMensal(dadosIniciais?.jurosMensal || localStorage.getItem('jurosMensal') || '');
    setParcelas(dadosIniciais?.parcelas || localStorage.getItem('parcelas') || '');
  }, [dadosIniciais]);

  const handleNumericInput = (e, setter, key) => {
    let valor = e.target.value.replace(/[^\d]/g, '');
    if (valor === '') {
      setter('');
      localStorage.setItem(key, '');
      return;
    }

    valor = (parseFloat(valor) / 100).toFixed(2);
    setter(valor);
    localStorage.setItem(key, valor);
  };

  const handleParcelasChange = (e) => {
    const valor = parseInt(e.target.value, 10) || '';
    setParcelas(valor);
    localStorage.setItem('parcelas', valor);
  };

  const openModal = () => {
    const valorMatEscNum = parseFloat(valorMatEsc);
    const descontoVistaNum = parseFloat(descontoVista);
    const jurosMensalNum = parseFloat(jurosMensal);
    const parcelasNum = parseInt(parcelas, 10);

    if (!valorMatEsc || !descontoVista || !jurosMensal || !parcelas) {
      alert('Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    if (valorMatEscNum < 100) {
      alert('O valor do valor do material escolar deve ser no mínimo R$ 100.');
      return;
    }

    if (descontoVistaNum < 0.1 || descontoVistaNum > 99.0) {
      alert('O desconto deve ser entre 0.1% e 99.0%.');
      return;
    }

    if (jurosMensalNum < 0.1 || jurosMensalNum > 99.0) {
      alert('A taxa de juros mensal deve ser entre 0.1% e 99.0%.');
      return;
    }

    if (parcelasNum < 2 || parcelasNum > 100) {
      alert('A quantidade de parcelas deve ser entre 2 e 100.');
      return;
    }

    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="py-24 px-6 h-[26.25rem] bg-azul-100">
      <div className="container relative z-10 mx-auto px-6 py-8 text-center max-w-2xl bg-azul-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6" id="questionario">
          Preencha os dados do valor do material escolar
        </h2>
        <form className="space-y-4 w-full">
          <label className="form-control items-center w-full">
            <p className="label-text text-white mb-2 text-base">Valor do material escolar (R$)</p>
            <input
              type="text"
              value={valorMatEsc}
              onChange={(e) => handleNumericInput(e, setvalorMatEsc, 'valorMatEsc')}
              className="input input-bordered max-w-md w-full"
              min="100"
              required
            />
          </label>
          <label className="form-control items-center w-full">
            <p className="label-text text-white mb-2 text-base">Desconto em % da compra à vista</p>
            <input
              type="text"
              value={descontoVista}
              onChange={(e) => handleNumericInput(e, setDescontoVista, 'descontoVista')}
              className="input input-bordered max-w-md w-full"
              min="0.1"
              max="99.0"
              required
            />
          </label>
          <label className="form-control items-center w-full">
            <p className="label-text text-white mb-2 text-base">Juros Mensais em % de suas aplicações</p>
            <input
              type="text"
              value={jurosMensal}
              onChange={(e) => handleNumericInput(e, setJurosMensal, 'jurosMensal')}
              className="input input-bordered max-w-md w-full"
              min="0.1"
              max="99.0"
              required
            />
          </label>
          <label className="form-control items-center w-full">
            <p className="label-text text-white mb-2 text-base">Quantidade de parcelas</p>
            <input
              type="number"
              value={parcelas}
              onChange={handleParcelasChange}
              className="input input-bordered max-w-md w-full"
              required
              min="2"
              max="100"
            />
          </label>
          <ReCAPTCHA
            className='flex justify-center'
            sitekey={siteKey}
            onChange={(value) => setHasRecaptcha(value)}
          />
          {hasRecaptcha 
            ? (<button
              type="button"
              onClick={openModal}
              className="bg-azul-100 w-fit mt-4 py-3 px-8 rounded-lg font-medium text-white"
            >
            Realizar Simulação
            </button>) 
            : (<button
              type="button"
              className="bg-gray-50/25 w-fit mt-4 py-3 px-8 rounded-lg font-medium cursor-not-allowed"
              disabled={true}
            >
            Realizar Simulação
            </button>)}
        </form>
        {showModal && (
          <ModalForm
            onClose={closeModal}
            onCalcular={() => {
              closeModal();
              onCalcular({
                valorMatEsc: parseFloat(valorMatEsc),
                descontoVista: parseFloat(descontoVista),
                jurosMensal: parseFloat(jurosMensal),
                parcelas: parseInt(parcelas, 10),
              });
            }}
            utmParams={utmParams}
          />
        )}
      </div>
    </section>
  );
}

export default Formulario;
