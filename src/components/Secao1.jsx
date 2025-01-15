import { useState } from 'react';
import logo from '../assets/img/logo.png'; // Substitua pelo caminho correto do logo
import backgroundImage from '../assets/img/banner.webp'; // Substitua pelo caminho correto da imagem de fundo

function Secao1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para rolar suavemente até o questionário
  const scrollToQuestionario = () => {
    // Define a âncora na URL
    window.location.hash = '#questionario';
  
    // Remove os dados do localStorage
    localStorage.removeItem('valorIPVA');
    localStorage.removeItem('descontoVista');
    localStorage.removeItem('jurosMensal');
    localStorage.removeItem('parcelas');
  
    // Recarrega a página
    window.location.reload();
  };
  
  
// Função para rolar até uma seção específica
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <section
      className="relative py-8 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Logo da Empresa */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo da Empresa" className="h-16 md:h-20 w-auto" />
        </div>
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Simulador de IPTU
        </h1>
        {/* Descrição */}
        <p className="text-sm md:text-lg mb-6 drop-shadow-md">
          Insira os dados necessários e veja os resultados detalhados do cálculo.
        </p>
        {/* Botões Informativos */}
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mt-6">
          {/* Botão 1: O que é IPTU */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary text-sm md:text-base px-4 py-2 w-full md:w-auto"
          >
            O que é o IPTU?
          </button>
          
          {/* Botão 2: Simule Agora */}
          <button
            onClick={scrollToQuestionario}
            className="btn btn-secondary text-sm md:text-base px-4 py-2 w-full md:w-auto"
          >
            Simular Agora
          </button>
          
      {/* Botão 3: Como Calcular o seu IPTU */}
      <button
        onClick={() => scrollToSection('entendamais')}
        className="btn btn-accent text-sm md:text-base px-4 py-2 w-full md:w-auto"
      >
        Como Calcular o seu IPTU
      </button>


        </div>
      </div>

      {/* Modal Explicativo */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-4">
          <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full relative">
            <h2 className="text-xl font-bold mb-4">O que é IPTU?</h2>
            <p className="text-sm mb-4">
              Dois dos gastos que mais desequilibram a vida financeira dos brasileiros são o IPVA e o IPTU, mas não precisa ser assim. 
              Não programar esses pagamentos com antecedência é o maior erro.
              Mas uma das dúvidas mais comuns em relação ao IPTU e ao IPVA é sobre a condição de pagamento: é melhor pagar à vista ou a prazo?
            </p>
            <a
              href="https://dsop.com.br/planejamento/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Saiba mais sobre o IPTU
            </a>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Secao1;
