function InvestimentoComParcelas({ valorInicial, parcelaMensal, taxaJuros, meses, jurosRecebidos }) {
  if (!valorInicial || !parcelaMensal || !taxaJuros || !meses || !jurosRecebidos) {
    return <p className="text-red-500">Dados insuficientes para calcular.</p>;
  }

  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-4">Cálculo com Resgate Mensal</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <p><strong>Valor Inicial:</strong> R$ {valorInicial.toFixed(2)}</p>
        <p><strong>Parcela Mensal:</strong> R$ {parcelaMensal.toFixed(2)}</p>
        <p><strong>Taxa de Juros Mensal:</strong> {taxaJuros.toFixed(2)}%</p>
        <p><strong>Meses:</strong> {meses}</p>
        <p><strong>Juros Recebidos:</strong> R$ {jurosRecebidos.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default InvestimentoComParcelas;
