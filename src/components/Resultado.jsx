import { useState, useEffect } from 'react';
import { calcularCareme, calcularInapum, calcularInapumju } from '../utils/investimentoUtils';
import InvestimentoComParcelas from './InvestimentoComParcelas';
import InvestimentoDesconto from './InvestimentoDesconto';
import RacionalInvestimentoDesconto from './RacionalInvestimentoDesconto';
import RacionalInvestimentoComParcelas from './RacionalInvestimentoComParcelas';
import AnaliseInvestimento from './AnaliseInvestimento';

function Resultado({ dados }) {
  const [careme, setCareme] = useState(0);
  const [inapun, setInapun] = useState(0);
  const [inapunju, setInapunju] = useState(0);

  useEffect(() => {
    // Verifica se os dados são válidos antes de calcular
    if (dados.valorIPVA > 0 && dados.parcelas > 0 && dados.jurosMensal > 0) {
      const jurosCareme = calcularCareme(
        dados.valorIPVA,
        dados.valorIPVA / dados.parcelas,
        dados.jurosMensal,
        dados.parcelas
      );
      setCareme(jurosCareme);
    } else {
      setCareme(0);
    }

    if (dados.descontoVista > 0 && dados.jurosMensal > 0 && dados.parcelas > 0) {
      const valorDesconto = (dados.valorIPVA * dados.descontoVista) / 100;
      const valorFuturo = calcularInapum(valorDesconto, dados.jurosMensal, dados.parcelas);
      const jurosTotais = calcularInapumju(valorDesconto, dados.jurosMensal, dados.parcelas);

      setInapun(valorFuturo);
      setInapunju(jurosTotais);
    } else {
      setInapun(0);
      setInapunju(0);
    }
  }, [dados]);

  return (
    <section className="py-8 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="mt-6" id="resultado">
          <AnaliseInvestimento
            valorIPVA={dados.valorIPVA}
            descontoVista={dados.descontoVista}
            jurosMensal={dados.jurosMensal}
            parcelas={dados.parcelas}
            parcelaMensal={dados.valorIPVA / dados.parcelas}
            jurosTotaisAcumulados={careme}
            valorDesconto={(dados.valorIPVA * dados.descontoVista) / 100}
            valorFuturoTotal={inapun}
            jurosAcumulados={inapunju}
            clienteNome={dados.nome}
          />
        </div>
        
        <details className="collapse bg-base-200">
          <summary className="collapse-title text-xl font-medium">
            Mostrar detalhes do Cálculo
          </summary>
          <div className="collapse-content">
            {/* Cálculo com Resgate Mensal */}
            <div className="mt-6">
              <InvestimentoComParcelas
                valorInicial={dados.valorIPVA}
                parcelaMensal={dados.valorIPVA / dados.parcelas}
                taxaJuros={dados.jurosMensal}
                meses={dados.parcelas}
                jurosRecebidos={careme}
              />
            </div>
            {/* Racional com Parcelas */}
            <div className="mt-6">
              <RacionalInvestimentoComParcelas
                valorInicial={dados.valorIPVA}
                parcelaMensal={dados.valorIPVA / dados.parcelas}
                taxaJuros={dados.jurosMensal}
                meses={dados.parcelas}
              />
            </div>
          </div>

          <div className="collapse-content">
            {/* Cálculo com Aporte Único */}
            <div className="mt-6">
              <InvestimentoDesconto
                valorDesconto={(dados.valorIPVA * dados.descontoVista) / 100}
                taxaJuros={dados.jurosMensal}
                meses={dados.parcelas}
                jurosAcumulados={inapunju}
              />
            </div>

            {/* Racional com Aporte Único */}
            <div className="mt-6">
              <RacionalInvestimentoDesconto
                valorDesconto={(dados.valorIPVA * dados.descontoVista) / 100}
                taxaJuros={dados.jurosMensal}
                meses={dados.parcelas}
              />
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}

export default Resultado;
