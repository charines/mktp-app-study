import { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import ReCAPTCHA from 'react-google-recaptcha';

function Formulario({ onCalcular, dadosIniciais, utmParams }) {
  const [valorIPVA, setValorIPVA] = useState('');
  const [descontoVista, setDescontoVista] = useState('');
  const [jurosMensal, setJurosMensal] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Prioriza dadosIniciais se fornecidos, senão utiliza valores do localStorage
    setValorIPVA(dadosIniciais?.valorIPVA || localStorage.getItem('valorIPVA') || '');
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
    const valorIPVANum = parseFloat(valorIPVA);
    const descontoVistaNum = parseFloat(descontoVista);
    const jurosMensalNum = parseFloat(jurosMensal);
    const parcelasNum = parseInt(parcelas, 10);

    if (!valorIPVA || !descontoVista || !jurosMensal || !parcelas) {
      alert('Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    if (valorIPVANum < 100) {
      alert('O valor do IPVA deve ser no mínimo R$ 100.');
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

  function onChangeCaptcha(value){
    console.log("Captcha value: ", value)
  }

  return (
    <section className="py-8 bg-base-200">
      <div className="container mx-auto px-4 text-center max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4" id="questionario">
          Preencha os Dados do IPVA
        </h2>
        <form className="space-y-4 w-full">
          <label className="form-control w-full">
            <span className="label-text">Valor do IPVA (R$)</span>
            <input
              type="text"
              value={valorIPVA}
              onChange={(e) => handleNumericInput(e, setValorIPVA, 'valorIPVA')}
              className="input input-bordered w-full"
              min="100"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text">Desconto em %</span>
            <input
              type="text"
              value={descontoVista}
              onChange={(e) => handleNumericInput(e, setDescontoVista, 'descontoVista')}
              className="input input-bordered w-full"
              min="0.1"
              max="99.0"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text">Juros Mensais em %</span>
            <input
              type="text"
              value={jurosMensal}
              onChange={(e) => handleNumericInput(e, setJurosMensal, 'jurosMensal')}
              className="input input-bordered w-full"
              min="0.1"
              max="99.0"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text">Quantidade de Parcelas</span>
            <input
              type="number"
              value={parcelas}
              onChange={handleParcelasChange}
              className="input input-bordered w-full"
              required
              min="2"
              max="100"
            />
          </label>
          <ReCAPTCHA 
            sitekey='6LfdCbMqAAAAAAXoLCvAjMEvgJmjF3ckY0K6JV62'
            onChange={onChangeCaptcha}
          />
          <button
            type="button"
            onClick={openModal}
            className="btn btn-secondary w-full mt-4"
          >
            Realizar Simulação
          </button>
        </form>
        {showModal && (
          <ModalForm
            onClose={closeModal}
            onCalcular={() => {
              closeModal();
              onCalcular({
                valorIPVA: parseFloat(valorIPVA),
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
