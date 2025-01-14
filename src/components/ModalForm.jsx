import { useState, useEffect } from 'react';
import { sendFormDataToServer } from '../utils/sendFormDataToServer';

function ModalForm({ onClose, onCalcular, dadosIniciais }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    // Prioriza os dadosIniciais passados via props, senão utiliza os do localStorage
    setNome(dadosIniciais?.nome || localStorage.getItem('form_nome') || '');
    setEmail(dadosIniciais?.email || localStorage.getItem('form_email') || '');
    setCidade(dadosIniciais?.cidade || localStorage.getItem('form_cidade') || '');
    setEstado(dadosIniciais?.estado || localStorage.getItem('form_estado') || '');
  }, [dadosIniciais]);

  const handleInputChange = (setter, key, value) => {
    setter(value);
    localStorage.setItem(key, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita comportamento padrão do formulário
  
    if (nome && email && cidade && estado) {
      // Armazena os dados no localStorage
      localStorage.setItem('form_nome', nome);
      localStorage.setItem('form_email', email);
      localStorage.setItem('form_cidade', cidade);
      localStorage.setItem('form_estado', estado);
      localStorage.setItem('showresult', 'sim');
  
      onCalcular(); // Chama a função para processar os dados
  
      // Dados para envio via POST
      const formData = {
        nome,
        email,
        cidade,
        estado,
        utm_source: "teste",
        utm_medium: "teste",
        utm_campaign: "IPVA",
        utm_content: "Simulador/IPVA",
        utm_term: "Simuladores",
        last_pag: "dsop",
        produto: "simulador/ipva",
        responsavel_pelo_lead: "kaue.ferreira@dsop.com.br",
      };
  
      try {
        // Executa o POST
        const response = await sendFormDataToServer(formData);
        console.log("Dados enviados com sucesso:", response);
      } catch (error) {
        console.error("Erro ao enviar os dados:", error);
        alert("Erro ao enviar os dados. Consulte o console para mais informações.");
      }
  
      // Recarrega a página para atualizar o formulário
      window.location.reload();
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-50">
        <h2 className="text-xl font-bold mb-4">Seus Dados Pessoais</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => handleInputChange(setNome, 'form_nome', e.target.value)}
            className="input input-bordered w-full"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(setEmail, 'form_email', e.target.value)}
            className="input input-bordered w-full"
            required
          />

          {/* Cidade */}
          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => handleInputChange(setCidade, 'form_cidade', e.target.value)}
            className="input input-bordered w-full"
            required
          />

          {/* Estado */}
          <input
            type="text"
            placeholder="Estado"
            value={estado}
            onChange={(e) => handleInputChange(setEstado, 'form_estado', e.target.value)}
            className="input input-bordered w-full"
            required
          />

          {/* Botões */}
          <button type="submit" className="btn btn-secondary w-full">
            Enviar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary w-full mt-2"
          >
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
