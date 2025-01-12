import { useEffect } from 'react';

function AnaliseInvestimento({
  valorIPVA,
  descontoVista,
  jurosMensal,
  parcelas,
  parcelaMensal,
  jurosTotaisAcumulados,
  valorDesconto,
  valorFuturoTotal,
  jurosAcumulados,
  clienteNome,
}) {
  // Ao montar o componente, rolar até a âncora
  useEffect(() => {
    const target = document.getElementById('analise');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

  const melhorOpcao =
    jurosTotaisAcumuladosNum > (jurosAcumuladosNum + valorDescontoNum)
      ? 'parcelado'
      : 'avista';

  return (
    <div id="analise" className="p-6 bg-base-100 shadow-md rounded-lg mt-4 overflow-auto">
<h2 className="text-2xl font-bold mb-4">Olá {clienteNome}</h2>
<h3 className="text-2xl font-bold mb-4">Com base nos valores fornecidos:</h3>

<section className="mb-6">
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Valor do IPVA:</strong> R$ {valorIPVANum.toFixed(2)}
    </li>
    <li>
      <strong>Desconto para pagamento à vista:</strong> {descontoVistaNum.toFixed(2)}% 
      (R$ {valorDescontoNum.toFixed(2)})
    </li>
    <li>
      <strong>Taxa de juros mensal:</strong> {jurosMensalNum.toFixed(2)}% ao mês
    </li>
    <li>
      <strong>Quantidade de parcelas:</strong> {parcelasNum}
    </li>
  </ul>
</section>

      {/* Comparação Final */}
      <section className="mb-6 space-y-4">
        <p>
          - Se você optar por pagar o IPVA <strong>parcelado</strong>, investirá inicialmente <strong>R$ {((parcelasNum - 1) * parcelaMensalNum).toFixed(2)}</strong>, deduzindo mensalmente o valor da parcela de <strong>R$ {parcelaMensalNum.toFixed(2)}</strong> durante <strong>{parcelasNum - 1}</strong> meses. <br/>Após quitar todas as parcelas, aplicando esse valor no mercado financeiro com uma taxa de juros mensal de <strong>{jurosMensalNum.toFixed(2)}%</strong>, você terá um saldo final (incluindo os juros recebidos) de <strong>R$ {jurosTotaisAcumuladosNum.toFixed(2)}</strong>.
        </p>

        <p>
          - Por outro lado, se você optar por pagar o IPVA <strong>à vista com desconto</strong>, terá um desconto de <strong>R$ {valorDescontoNum.toFixed(2)}</strong>. Se aplicar esse valor no mercado financeiro com uma taxa de juros mensal de <strong>{jurosMensalNum.toFixed(2)}%</strong>, esse desconto renderia um valor futuro de <strong>R$ {(jurosAcumuladosNum + valorDescontoNum).toFixed(2)}</strong> ao final de <strong>{parcelasNum}</strong> meses.
        </p>

        <p className="text-lg  mt-4">
          <span><strong>Decisão Final:</strong> A melhor escolha depende do rendimento final:</span>
          <br />
          - <strong>À vista:</strong> Com o desconto, o valor futuro aplicado seria de <strong>R$ {(jurosAcumuladosNum + valorDescontoNum).toFixed(2)}</strong>.
          <br />
          - <strong>A prazo:</strong> Com o investimento parcelado, o saldo final seria de <strong>R$ {jurosTotaisAcumuladosNum.toFixed(2)}</strong>.
          <br />
          <strong className="block mt-2">
            {melhorOpcao === 'parcelado'
              ? 'Portanto, nossa sugestão é que você pague o IPVA parcelado.'
              : 'Portanto, nossa sugestão é que você pague o IPVA à vista.'}
          </strong>
        </p>
      </section>
    </div>
  );
}

export default AnaliseInvestimento;
