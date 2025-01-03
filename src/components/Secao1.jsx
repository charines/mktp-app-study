import { useState } from 'react';
import logo from '../assets/img/logo.png'; // Substitua pelo caminho correto do logo
import backgroundImage from '../assets/img/banner.webp'; // Substitua pelo caminho correto da imagem de fundo

/**
 * Componente Secao1
 * 
 * Objetivo: Apresentar o cabeçalho principal da Landing Page com uma breve descrição
 * e botões informativos que abrem modais ou rolam para a seção do questionário.
 */

function Secao1({ onShowQuestionnaire }) {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const scrollToQuestionnaire = () => {
    onShowQuestionnaire(); // Torna o Questionário visível antes de rolar
    setTimeout(() => {
      const element = document.getElementById('questionario');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
          <img src={logo} alt="Logo da Empresa" className="h-16 md:h-20" />
        </div>
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Questionário de Perfil Comportamental
        </h1>
        {/* Descrição */}
        <p className="text-sm md:text-lg mb-6 drop-shadow-md">
          Responda ao nosso questionário interativo e descubra seu perfil comportamental de forma prática e rápida.
        </p>
        {/* Botões Informativos */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <button
            onClick={() => openModal('como-funciona')}
            className="btn btn-primary w-full md:w-auto"
          >
            Como funciona o questionário?
          </button>
          <button
            onClick={scrollToQuestionnaire}
            className="btn btn-secondary w-full md:w-auto"
          >
            Iniciar Questionário
          </button>
          <button
            onClick={() => openModal('sobre-perfis')}
            className="btn btn-accent w-full md:w-auto"
          >
            Saiba mais sobre os perfis
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
              {modalContent === 'como-funciona' && 'Como Funciona o Questionário?'}
              {modalContent === 'sobre-perfis' && 'Saiba Mais Sobre os Perfis'}
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              {modalContent === 'como-funciona' && 'O questionário foi desenvolvido para identificar seu perfil comportamental com base em respostas rápidas e objetivas. Cada resposta contribui para determinar seu perfil dominante.'}
              {modalContent === 'sobre-perfis' && 'Os perfis comportamentais refletem diferentes abordagens para enfrentar desafios e tomar decisões. Alguns buscam segurança e estabilidade, enquanto outros focam em inovação e ousadia. Existem perfis mais estratégicos e colaborativos, enquanto outros enxergam oportunidades criativas mesmo em cenários adversos.'}
            </p>
            <div className="flex justify-end mt-6">
              <button onClick={closeModal} className="btn btn-primary w-full md:w-auto">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Secao1;
