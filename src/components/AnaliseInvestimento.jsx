function AnaliseInvestimento({
  valorIPVA,
  descontoVista,
  jurosMensal,
  parcelas,
  parcelaMensal,
  jurosTotaisAcumulados,
  valorDesconto,
  valorFuturoTotal,
  jurosAcumulados
}) {
  // Garantir que os valores principais sejam números válidos
  const valorIPVANum = parseFloat(valorIPVA) || 0;
  const descontoVistaNum = parseFloat(descontoVista) || 0;
  const jurosMensalNum = parseFloat(jurosMensal) || 0;
  const parcelasNum = parseInt(parcelas, 10) || 0;
  const parcelaMensalNum = parseFloat(parcelaMensal) || 0;
  const jurosTotaisAcumuladosNum = parseFloat(jurosTotaisAcumulados) || 0;
  const valorDescontoNum = parseFloat(valorDesconto) || 0;
  const valorFuturoTotalNum = parseFloat(valorFuturoTotal) || 0;
  const jurosAcumuladosNum = parseFloat(jurosAcumulados) || 0;

  if (!valorIPVANum || !descontoVistaNum || !jurosMensalNum || !parcelasNum) {
    return <p className="text-red-500">Dados insuficientes para análise.</p>;
  }

  // Definir qual opção é melhor
  const melhorOpcao =
    jurosTotaisAcumuladosNum > (jurosAcumuladosNum+valorDescontoNum)
      ? 'parcelado'
      : 'avista';

  return (
    <div className="p-6 bg-base-100 shadow-md rounded-lg mt-4 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Análise Comparativa: Pagamento à Vista vs Parcelado</h2>

      {/* Comparação Final */}
      <section className="mb-6">
        <p>
          - No pagamento <strong>parcelado</strong>, você acumulou juros no valor de <strong>R$ {jurosTotaisAcumuladosNum.toFixed(2)}</strong>.
        </p>
        <p>
          - No pagamento <strong>à vista com desconto</strong>, seu investimento rendeu <strong>R$ {(jurosAcumuladosNum+valorDescontoNum).toFixed(2)}</strong>.
        </p>
        <p className="text-lg font-bold mt-4">
         <strong>
            {melhorOpcao === 'parcelado' 
              ? 'A melhor opção é pagar parcelado, pois os juros acumulados foram maiores.' 
              : 'A melhor opção é pagar à vista com desconto, pois o investimento trouxe mais retorno.'}
          </strong>
        </p>
      </section>

      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">Mais detalhes Clique Aqui</summary>
        <div className="collapse-content">
            {/* Resumo dos Valores de Entrada */}
            <section className="mb-6">
              <h3 className="text-lg font-bold mb-2">🎯 Valores de Entrada</h3>
              <p><strong>Valor do IPVA:</strong> R$ {valorIPVANum.toFixed(2)}</p>
              <p><strong>Desconto à Vista:</strong> {descontoVistaNum}%</p>
              <p><strong>Taxa de Juros Mensal:</strong> {jurosMensalNum}%</p>
              <p><strong>Número de Parcelas:</strong> {parcelasNum}</p>
            </section>

            {/* Pagamento Parcelado */}
            <section className="mb-6">
              <h3 className="text-lg font-bold mb-2">💳 Pagamento Parcelado</h3>
              <p>- Você pagará <strong>R$ {parcelaMensalNum.toFixed(2)}</strong> por mês durante <strong>{parcelasNum}</strong> meses.</p>
              <p>- Ao final, terá pago um total de <strong>R$ {valorIPVANum.toFixed(2)}</strong>.</p>
              <p>- Os juros acumulados somarão <strong>R$ {jurosTotaisAcumuladosNum.toFixed(2)}</strong>.</p>
              <p>
                <strong>Resultado Final:</strong> Seu dinheiro não gerou rendimento extra, pois cada parcela foi paga ao longo do tempo.
              </p>
            </section>

            {/* Pagamento à Vista com Desconto */}
            <section className="mb-6">
              <h3 className="text-lg font-bold mb-2">🏦 Pagamento à Vista com Desconto</h3>
              <p>- Você terá um desconto de <strong>R$ {valorDescontoNum.toFixed(2)}</strong> no pagamento.</p>
              <p>- Esse valor economizado foi investido e gerou um rendimento de <strong>R$ {jurosAcumuladosNum.toFixed(2)}</strong>.</p>
              <p>- Ao final de <strong>{parcelasNum}</strong> meses, seu investimento se transformou em <strong>R$ {valorFuturoTotalNum.toFixed(2)}</strong>.</p>
              <p>
                <strong>Resultado Final:</strong> Você pagou menos pelo IPVA e ainda gerou um pequeno rendimento com o dinheiro economizado.
              </p>
            </section>
        </div>
      </details>


    </div>
  );
}

export default AnaliseInvestimento;
