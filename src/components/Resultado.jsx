import { calcularPerfil } from '../utils/calculoPerfil';

function Resultado({ answers }) {
  const perfil = calcularPerfil(Object.values(answers));

  const perfisEmpreendedor = {
    PO: {
      titulo: 'Passivo Operacional (PO)',
      descricao: 'Visa segurança, conforto e estabilidade, prefere não correr riscos, ousa pouco, toma decisões por necessidade. É o que exerce atividades operacionais com responsabilidades limitadas, com direcionamento de líder e visa renda recorrente.',
    },
    PE: {
      titulo: 'Passivo Estrategista (PE)',
      descricao: 'Visa segurança, conforto e estabilidade, prefere não correr riscos, ousa pouco, toma decisões por necessidade. Líder de atividades, trabalha e desenvolve equipes e pode ser um bom técnico. Busca oportunidades.',
    },
    AT: {
      titulo: 'Ativo Terceiros (AT)',
      descricao: 'Não tem medo de perder. Ousado, corajoso, não disciplinado e resiliente. Obstáculos e rupturas o fortalecem, toma decisões pelo impulso, sem analisar consequências. Busca baixo risco do negócio, resultados consolidados, limites controlados. Influenciado pela tendência do mercado.',
    },
    AI: {
      titulo: 'Ativo Idealizador (AI)',
      descricao: 'Não tem medo de perder. Ousado, corajoso, não disciplinado e resiliente. Obstáculos e rupturas o fortalecem, toma decisões pelo impulso, sem analisar consequências. Inova em atividades tradicionais ou não. Ousa, independente dos riscos e recursos financeiros, visionário, enxerga o óbvio por um outro ângulo. Obstáculos são motivacionais e busca diferentes para um mesmo fim, oportunista.',
    },
  };

  const competencias = {
    Liderança: ['PE', 'AI'],
    Autopersuasão: ['PE', 'AI'],
    Sonhos: ['PO', 'PE', 'AT', 'AI'],
    Resiliência: ['PE', 'AT', 'AI'],
    Confiança: ['AT', 'AI'],
    'Eficiência e Eficácia': ['PE', 'AI'],
    'Independência Financeira': ['PO', 'PE', 'AT', 'AI'],
    Otimismo: ['PE', 'AI'],
  };

  // Filtra as competências relacionadas ao perfil dominante
  const competenciasAssociadas = Object.entries(competencias)
    .filter(([, perfis]) => perfis.includes(perfil))
    .map(([comp]) => comp);

  // Função para calcular a quantidade de cada perfil
  const calcularQuantidadePorPerfil = () => {
    const contagem = {};
    Object.values(answers).forEach((perfil) => {
      contagem[perfil] = (contagem[perfil] || 0) + 1;
    });
    return contagem;
  };

  const quantidadePorPerfil = calcularQuantidadePorPerfil();

  return (
    <section className="py-8 px-4 md:px-8 text-center max-w-3xl mx-auto bg-black text-white">
      {/* Título */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">Seu Perfil Dominante</h2>
      
      {/* Perfil de Empreendedor */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-green-400">
          {perfisEmpreendedor[perfil]?.titulo || 'Perfil não identificado'}
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          {perfisEmpreendedor[perfil]?.descricao || 'Descrição não disponível.'}
        </p>
      </div>

      {/* Competências */}
      <div className="mt-6 text-left mx-auto max-w-md bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-center">Competências Associadas:</h3>
        <ul className="space-y-1">
          {competenciasAssociadas.map((comp) => (
            <li key={comp} className="flex justify-between border-b border-gray-700 py-1">
              <span className="font-medium text-gray-200">{comp}:</span>
              <span className="font-bold text-green-400">✔</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quantidade por Perfil - Invisível */}
      <div className="mt-8 text-left mx-auto max-w-md bg-gray-800 p-4 rounded-lg shadow-md hidden">
        <h3 className="text-lg font-semibold mb-2 text-center">Distribuição de Perfis:</h3>
        <ul className="space-y-1">
          {Object.entries(quantidadePorPerfil).map(([key, value]) => (
            <li key={key} className="flex justify-between border-b border-gray-700 py-1">
              <span className="font-medium text-gray-200">{key}:</span>
              <span className="font-bold text-green-400">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão de Refazer */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary w-full md:w-auto px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-black font-bold transition-all"
        >
          Refazer Questionário
        </button>
      </div>
    </section>
  );
}

export default Resultado;
