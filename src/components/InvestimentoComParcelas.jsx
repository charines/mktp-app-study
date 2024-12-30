
function InvestimentoComParcelas({ valorInicial, parcelaMensal, taxaJuros, meses, handleCareme }) {
  if (!valorInicial || !parcelaMensal || !taxaJuros || !meses) {
    return <p className="text-red-500">Dados insuficientes para calcular.</p>;
  }

  const calcularInvestimento = () => {
    let saldo = valorInicial - parcelaMensal; // Valor inicial menos a primeira parcela
    const i = taxaJuros / 100; // Taxa de juros mensal
    let jurosTotais = 0;

    for (let mes = 1; mes <= meses; mes++) {
      const jurosMensal = saldo * i; // Juros acumulados no mês atual
      jurosTotais += jurosMensal; // Soma os juros do mês ao total
      saldo = (saldo + jurosMensal) - parcelaMensal; // Atualiza o saldo para o próximo mês
    }

    return {
      jurosTotais: jurosTotais,
    };
  };

  const resultado = calcularInvestimento();
  handleCareme(resultado.jurosTotais)

  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-4">Cálculo com Resgate Mensal</h3>
      <p><strong>Valor Inicial:</strong>{valorInicial}</p>
      <p><strong>Parcela Mensal:</strong>{parcelaMensal}</p>
      <p><strong>Taxa de Juros Mensal:</strong> {taxaJuros}%</p>
      <p><strong>Meses:</strong> {meses}</p>
      <p className="text-lg font-bold mt-4"><strong>Juros Totais Acumulados:</strong> R$ {resultado.jurosTotais.toFixed(2)}</p>
    </div>
  );
}

export default InvestimentoComParcelas;
