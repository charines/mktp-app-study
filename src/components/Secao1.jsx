import logo from '../assets/img/logo.png'; // Substitua pelo caminho correto do logo
import backgroundImage from '../assets/img/banner.webp'; // Substitua pelo caminho correto da imagem de fundo

function Secao1() {
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
          Simulador de IPVA
        </h1>
        {/* Descrição */}
        <p className="text-lg mb-6 drop-shadow-md">
          Insira os dados necessários e veja os resultados detalhados do cálculo.
        </p>
        {/* Botões Informativos */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.serasa.com.br/carteira-digital/guia-do-ipva-da-serasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            O que é o IPVA?
          </a>
          <a
            href="https://www.idinheiro.com.br/calculadoras/simulador-de-ipva/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Como calcular o IPVA?
          </a>
          <a
            href="https://portal.fazenda.sp.gov.br/servicos/ipva"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Pague seu IPVA
          </a>
        </div>
      </div>
    </section>
  );
}

export default Secao1;
