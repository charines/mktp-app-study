
function InvestimentoDesconto({ valorDesconto, taxaJuros, meses, handleInapum, handleInapumju }) {
  if (!valorDesconto || !taxaJuros || !meses) {
    return <p className="text-red-500">Dados insuficientes para calcular.</p>;
  }

  const calcularInvestimentoDesconto = () => {
    const VP = parseFloat(valorDesconto); // Valor inicial do investimento (desconto)
    const i = parseFloat(taxaJuros) / 100; // Taxa de juros mensal
    const n = parseInt(meses, 10); // Número de meses

    // Cálculo do Valor Futuro
    const VF = VP * Math.pow(1 + i, n);

    // Cálculo dos Juros Acumulados
    const jurosTotais = VF - VP;

    return {
      valorFuturo: VF,
      jurosTotais: jurosTotais,
    };
  };

  const resultado = calcularInvestimentoDesconto();
  handleInapum(resultado.valorFuturo)
  handleInapumju(resultado.jurosTotais)

  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-4">Investimento de Aporte Único</h3>
      <p><strong>Valor Inicial do Aporte (Desconto):</strong> R$ {valorDesconto.toFixed(2)}</p>
      <p><strong>Taxa de Juros Mensal:</strong> {taxaJuros}%</p>
      <p><strong>Quantidade de Meses:</strong> {meses}</p>
      <p className="text-lg font-bold mt-4"><strong>Valor Futuro Total:</strong> R$ {resultado.valorFuturo.toFixed(2)}</p>
      <p><strong>Juros Acumulados:</strong> R$ {resultado.jurosTotais.toFixed(2)}</p>
    </div>
  );
}

export default InvestimentoDesconto;
