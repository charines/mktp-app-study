import { useEffect } from 'react';

function AnaliseInvestimento({
  valorIPTU,
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
  const valorIPTUNum = parseFloat(valorIPTU) || 0;
  const descontoVistaNum = parseFloat(descontoVista) || 0;
  const jurosMensalNum = parseFloat(jurosMensal) || 0;
  const parcelasNum = parseInt(parcelas, 10) || 0;
  const parcelaMensalNum = parseFloat(parcelaMensal) || 0;
  const jurosTotaisAcumuladosNum = parseFloat(jurosTotaisAcumulados) || 0;
  const valorDescontoNum = parseFloat(valorDesconto) || 0;
  const valorFuturoTotalNum = parseFloat(valorFuturoTotal) || 0;
  const jurosAcumuladosNum = parseFloat(jurosAcumulados) || 0;

  if (!valorIPTUNum || !descontoVistaNum || !jurosMensalNum || !parcelasNum) {
    return <p className="text-red-500">Dados insuficientes para análise.</p>;
  }

  const melhorOpcao =
    jurosTotaisAcumuladosNum > (jurosAcumuladosNum + valorDescontoNum)
      ? 'parcelado'
      : 'avista';

  const handleReset = () => {
    // Remove os dados do localStorage
    localStorage.removeItem('valorIPTU');
    localStorage.removeItem('descontoVista');
    localStorage.removeItem('jurosMensal');
    localStorage.removeItem('parcelas');
    localStorage.removeItem('_grecaptcha');

    // Recarrega a página e leva para o topo
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div id="analise" className="p-6 bg-base-100 shadow-md rounded-lg mt-4 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Olá {clienteNome}</h2>
      <h3 className="text-lg mb-4">Com base nas informações fornecidas, preparamos uma análise para te ajudar a tomar a melhor decisão sobre o pagamento do IPTU. Confira:</h3>

      <section className="mb-6">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Valor do IPTU:</strong> R$ {valorIPTUNum.toFixed(2)}
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
      <h2 className="text-2xl font-bold mb-4">Cenário 1: Pagamento Parcelado</h2>
      <p>Se você optar por parcelar o IPTU:</p>
      <ul>
        <li>O valor da primeira parcela será <strong>R$ {parcelaMensalNum.toFixed(2)}</strong> (1/{parcelasNum} do total).</li>
        <li>O restante do valor, <strong>R$ {((parcelasNum - 1) * parcelaMensalNum).toFixed(2)}</strong>, poderá ser investido.</li>
        <li>A cada mês, você retirará o valor da parcela <strong>(R$ {parcelaMensalNum.toFixed(2)})</strong> do investimento.</li>        
      </ul>
      <p>Após pagar todas as parcelas e considerando os rendimentos do investimento, o saldo final seria de apenas <strong>R$ {jurosTotaisAcumuladosNum.toFixed(2)}</strong>.</p>
      </section>


      <section className="mb-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Cenário 2: Pagamento à Vista com Desconto</h2>
      <p>Se você optar por pagar o IPTU à vista, terá um desconto imediato de:<strong>R$ {valorDescontoNum.toFixed(2)}</strong>.</p>
      <ul>
        <li>Esse valor pode ser investido a uma taxa de juros mensal de <strong>{jurosMensalNum.toFixed(2)}%</strong></li>
        <li>Após <strong>{parcelasNum}</strong>  meses, o valor renderia, no total, <strong>R$ {(jurosAcumuladosNum + valorDescontoNum).toFixed(2)}</strong></li>
      </ul>
      </section>



      <section className="mb-6 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Conclusão:</h2>
          <p>Comparando as duas opções:</p>
          <ul>
            <li>
              <strong>À vista:</strong> você economizaria com o desconto e, ao investir o valor, teria <strong>R$ {(jurosAcumuladosNum + valorDescontoNum).toFixed(2)}</strong> após <strong>{parcelasNum}</strong> meses.
            </li>          
            <li>
              <strong>Parcelado:</strong> o saldo final do investimento seria de apenas <strong>R$ {jurosTotaisAcumuladosNum.toFixed(2)}</strong>.          
            </li>
          </ul>
          <h2 className="text-1xl font-bold mb-4">Nossa recomendação:</h2>
          <span> 
            <strong className="block mt-2">
              {melhorOpcao === 'parcelado'
                ? 'o pagamento parcelado é mais vantajoso neste caso! 💡'
                : 'o pagamento à vista é mais vantajoso neste caso! 💡'}
            </strong>
          </span>
      </section>

      {/* Botão Refazer o Cálculo */}
      <button
        onClick={handleReset}
        className="btn btn-primary mt-4"
      >
        Recalcular
      </button>
    </div>
  );
}

export default AnaliseInvestimento;
