import { useState } from 'react'

import InvestimentoComParcelas from './InvestimentoComParcelas';
import InvestimentoDesconto from './InvestimentoDesconto';
import RacionalInvestimentoDesconto from './RacionalInvestimentoDesconto';
import RacionalInvestimentoComParcelas from './RacionalInvestimentoComParcelas';
import AnaliseInvestimento from './AnaliseInvestimento';

function Resultado({ dados }) {
  const [analise, setAnalise] = useState({
    "careme":0,
    "inapun":0,
    "inapunju":0,
  });
  const [careme, setCareme] = useState(0)
  const [inapun, setInapum] = useState()
  const [inapunju, setInapunju] = useState()
  
  const updateCareme = r =>{
    setCareme(r)
  }
  const updateInapum = r =>{
    setInapum(r)
  }
  const updateInapumju = r =>{
    setInapunju(r)
  }

  return (
    <section className="py-8 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="mt-6" id='resultado'>
          <AnaliseInvestimento 
          valorIPVA={dados.valorIPVA}
          descontoVista={dados.descontoVista}
          jurosMensal={dados.jurosMensal} 
          parcelas={dados.parcelas}
          parcelaMensal={(dados.valorIPVA / dados.parcelas)}
          jurosTotaisAcumulados={careme}
          valorDesconto={(dados.valorIPVA * dados.descontoVista) / 100}
          valorFuturoTotal={inapun}
          jurosAcumulados={inapunju}          
          />
        </div>      
        <details className="collapse bg-base-200">
          <summary className="collapse-title text-xl font-medium">Mostrar detalhes do Cálculo</summary>
          <div className="collapse-content">
            {/* Cálculo com Resgate Mensal */}
            <div className="mt-6">
              <InvestimentoComParcelas
                valorInicial={dados.valorIPVA}
                parcelaMensal={(dados.valorIPVA / dados.parcelas)}
                taxaJuros={dados.jurosMensal}
                meses={dados.parcelas}
                handleCareme={updateCareme}
              />
            </div>
            {/* Racional com Parcelas */}
            <div className="mt-6">
              <RacionalInvestimentoComParcelas
                valorInicial={dados.valorIPVA}
                parcelaMensal={(dados.valorIPVA / dados.parcelas)}
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
                handleInapum={updateInapum} 
                handleInapumju={updateInapumju}
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
