import React, { useState } from 'react';
import logo from '../assets/img/logo.png'; // Substitua pelo caminho correto do logo
import backgroundImage from '../assets/img/banner.webp'; // Substitua pelo caminho correto da imagem de fundo

function Secao1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          </div>
        </div>
      )}
    </section>
  );
}

export default Secao1;
