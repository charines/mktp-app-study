import { calcularPerfil } from '../utils/calculoPerfil';

function Resultado({ answers }) {
  const perfil = calcularPerfil(Object.values(answers));

  const perfisDescricao = {
    PO: 'Você valoriza segurança, estabilidade e previsibilidade. Suas decisões são cuidadosas e bem pensadas, buscando minimizar riscos e garantir um ambiente controlado. Seu foco está em construir uma base sólida e confiável para alcançar resultados consistentes ao longo do tempo.',
    PE: 'Você é um estrategista nato, com habilidade para liderar e inspirar equipes. Seu foco está em encontrar oportunidades, promover colaboração e guiar os outros com uma visão clara e organizada. Sua capacidade de equilibrar planejamento e execução faz de você uma peça essencial em qualquer projeto.',
    AT: 'Você é movido pela ousadia e coragem. Desafios e incertezas não te assustam, mas te motivam. Sua determinação permite superar obstáculos rapidamente, tomando decisões com agilidade e confiança. Você enxerga o potencial em cada situação e não teme arriscar para alcançar grandes resultados.',
    AI: 'Você é um verdadeiro visionário, capaz de enxergar oportunidades onde outros veem limitações. Sua criatividade e inovação moldam suas decisões, e você não teme seguir caminhos pouco convencionais. Obstáculos são encarados como oportunidades de crescimento, e sua capacidade de pensar fora da caixa é inspiradora.',
  };

  return (
    <section className="py-8 px-4 md:px-8 text-center max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Seu Perfil Dominante</h2>
      <p className="text-base md:text-lg font-semibold mb-2">
        <span className="text-gray-600">Perfil:</span> <span>{perfil}</span>
      </p>
      <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
        {perfisDescricao[perfil]}
      </p>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary w-full md:w-auto px-4 py-2 rounded-md transition-all"
        >
          Refazer Questionário
        </button>
      </div>
    </section>
  );
}

export default Resultado;
