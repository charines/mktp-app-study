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
          <img src={logo} alt="Logo da Empresa" className="h-16" />
        </div>
        {/* Título */}
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Questionário de Perfil Comportamental
        </h1>
        {/* Descrição */}
        <p className="text-lg mb-6 drop-shadow-md">
          Responda ao nosso questionário interativo e descubra seu perfil comportamental de forma prática e rápida.
        </p>
        {/* Botões Informativos */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => openModal('como-funciona')}
            className="btn btn-primary"
          >
            Como funciona o questionário?
          </button>
          <button
            onClick={scrollToQuestionnaire}
            className="btn btn-secondary"
          >
            Iniciar Questionário
          </button>
          <button
            onClick={() => openModal('sobre-perfis')}
            className="btn btn-accent"
          >
            Saiba mais sobre os perfis
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-black">
              {modalContent === 'como-funciona' && 'Como Funciona o Questionário?'}
              {modalContent === 'sobre-perfis' && 'Saiba Mais Sobre os Perfis'}
            </h2>
            <p className="text-gray-700">
              {modalContent === 'como-funciona' && 'O questionário foi desenvolvido para identificar seu perfil comportamental com base em respostas rápidas e objetivas. Cada resposta contribui para determinar seu perfil dominante.'}
              {modalContent === 'sobre-perfis' && 'Os perfis comportamentais refletem diferentes abordagens para enfrentar desafios e tomar decisões. Alguns buscam segurança e estabilidade, enquanto outros focam em inovação e ousadia. Existem perfis mais estratégicos e colaborativos, enquanto outros enxergam oportunidades criativas mesmo em cenários adversos. Cada abordagem possui características únicas que moldam suas ações e resultados..'}
            </p>
            <div className="flex justify-end mt-6">
              <button onClick={closeModal} className="btn btn-primary">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Secao1;
