<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import logo from '../assets/img/logo.png'; // Substitua pelo caminho correto do logo
import backgroundImage from '../assets/img/banner.webp'; // Substitua pelo caminho correto da imagem de fundo

function Secao1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
>>>>>>> lp-ipva
  };

  return (
    <section
      className="relative py-8 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10 mx-auto px-4 text-center max-w-screen-lg">
        {/* Logo da Empresa */}
        <div className="flex justify-center mb-4">
<<<<<<< HEAD
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
=======
          <img
            src={logo}
            alt="Logo da Empresa"
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Simulador de IPVA
        </h1>
        {/* Descrição */}
        <p className="text-sm sm:text-base md:text-lg mb-6 drop-shadow-md">
          Insira os dados necessários e veja os resultados detalhados do cálculo.
        </p>
        {/* Botões Informativos */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
          {/* Botão 1: O que é IPVA */}
          <button
            onClick={toggleModal}
            className="btn btn-primary text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
          >
            O que é o IPVA?
          </button>
          {/* Botão 2: Simule Agora */}
          <a
            href="#formulario"
            className="btn btn-secondary text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
          >
            Simule Agora
          </a>
          {/* Botão 3: Como Calcular o IPVA */}
          <a
            href="https://www.idinheiro.com.br/calculadoras/simulador-de-ipva/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
          >
            Como calcular o IPVA
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full relative">
            <h2 className="text-xl font-bold mb-4">O que é IPVA?</h2>
            <p className="text-sm mb-4">
              O IPVA (Imposto sobre a Propriedade de Veículos Automotores) é um imposto estadual obrigatório 
              que deve ser pago anualmente pelos proprietários de veículos. A arrecadação é utilizada para 
              financiar serviços públicos, como saúde, educação e infraestrutura viária.
            </p>
            <a
              href="https://www.serasa.com.br/carteira-digital/guia-do-ipva-da-serasa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Saiba mais sobre o IPVA
            </a>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
>>>>>>> lp-ipva
          </div>
        </div>
      )}
    </section>
  );
}

export default Secao1;
