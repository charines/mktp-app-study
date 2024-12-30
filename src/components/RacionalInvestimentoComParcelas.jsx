
function RacionalInvestimentoComParcelas({ valorInicial, parcelaMensal, taxaJuros, meses }) {
  // Garantir que os valores são números
  const valorInicialNum = parseFloat(valorInicial) || 0;
  const parcelaMensalNum = parseFloat(parcelaMensal) || 0;
  const taxaJurosNum = parseFloat(taxaJuros) || 0;
  const mesesNum = parseInt(meses, 10) || 0;

  if (!valorInicialNum || !parcelaMensalNum || !taxaJurosNum || !mesesNum) {
    return <p className="text-red-500">Dados insuficientes para calcular.</p>;
  }

  const calcularRacionalInvestimento = () => {
    const i = taxaJurosNum / 100; // Taxa de juros mensal
    let saldo = valorInicialNum - parcelaMensalNum; // Valor inicial menos a primeira parcela
    let jurosRecebidos = saldo * i; // Juros acumulados no mês atual
    let valorTotal = saldo + jurosRecebidos // Garante que o saldo não fique negativo
    const tabela = [];

    for (let mes = 1; mes <= mesesNum; mes++) {
      tabela.push({
        mes,
        valorAplicado: saldo.toFixed(2),
        jurosRecebidos: jurosRecebidos.toFixed(2),
        valorTotal: valorTotal.toFixed(2),
      });
      saldo = (saldo+jurosRecebidos) - parcelaMensalNum
      jurosRecebidos = saldo * i;
      valorTotal = saldo + jurosRecebidos

    }

    return tabela;
  };

  const tabela = calcularRacionalInvestimento();

  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg mt-4 overflow-auto">
      <h3 className="text-xl font-bold mb-4">Racional do Investimento com Parcelas</h3>
      <table className="table-auto w-full text-sm text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2">Mês</th>
            <th className="border px-4 py-2">Valor Aplicado</th>
            <th className="border px-4 py-2">Juros Recebidos</th>
            <th className="border px-4 py-2">Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((linha) => (
            <tr key={linha.mes}>
              <td className="border px-4 py-2">{linha.mes}</td>
              <td className="border px-4 py-2">R$ {linha.valorAplicado}</td>
              <td className="border px-4 py-2">R$ {linha.jurosRecebidos}</td>
              <td className="border px-4 py-2">R$ {linha.valorTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RacionalInvestimentoComParcelas;
