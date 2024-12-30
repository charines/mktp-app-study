
function RacionalInvestimentoDesconto({ valorDesconto, taxaJuros, meses }) {
  if (!valorDesconto || !taxaJuros || !meses) {
    return <p className="text-red-500">Dados insuficientes para calcular.</p>;
  }

  const calcularRacionalInvestimento = () => {
    let VP = parseFloat(valorDesconto); // Valor inicial investido (desconto)
    const i = parseFloat(taxaJuros) / 100; // Taxa de juros mensal
    const tabela = [];

    for (let mes = 1; mes <= meses; mes++) {
      const jurosRecebidos = VP * i; // Juros acumulados no mês atual
      const valorTotal = VP + jurosRecebidos; // Valor total acumulado com juros

      tabela.push({
        mes,
        valorAplicado: VP.toFixed(2),
        jurosRecebidos: jurosRecebidos.toFixed(2),
        valorTotal: valorTotal.toFixed(2),
      });

      // Atualiza o Valor Aplicado para o próximo mês com os juros
      VP = valorTotal;
    }

    return tabela;
  };

  const tabela = calcularRacionalInvestimento();

  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg mt-4 overflow-auto">
      <h3 className="text-xl font-bold mb-4">Racional do Investimento com Desconto</h3>
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

export default RacionalInvestimentoDesconto;
