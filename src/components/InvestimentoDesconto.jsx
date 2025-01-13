function InvestimentoDesconto({ valorDesconto, taxaJuros, meses, jurosAcumulados }) {
  if (!valorDesconto || !taxaJuros || !meses || !jurosAcumulados) {
    return <p className="text-red-500">Dados insuficientes para apresentar.</p>;
  }

  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-4">À Vista</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <p><strong>Valor Inicial:</strong> R$ {valorDesconto.toFixed(2)}</p>
        <p><strong>Taxa de Juros Mensal:</strong> {taxaJuros.toFixed(2)}%</p>
        <p><strong>Quantidade de Meses:</strong> {meses}</p>
        <p><strong>Juros Acumulados:</strong> R$ {jurosAcumulados.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default InvestimentoDesconto;
