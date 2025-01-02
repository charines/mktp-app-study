// utils/investimentoUtils.js

/**
 * Calcula os juros totais acumulados em um investimento com parcelas.
 * @param {number} valorInicial - Valor inicial do investimento.
 * @param {number} parcelaMensal - Valor pago mensalmente.
 * @param {number} taxaJuros - Taxa de juros mensal (em %).
 * @param {number} meses - Quantidade de meses.
 * @returns {number} Juros totais acumulados.
 */
export function calcularCareme(valorInicial, parcelaMensal, taxaJuros, meses) {
  if (!valorInicial || !parcelaMensal || !taxaJuros || !meses) {
    throw new Error("Parâmetros inválidos para cálculo de Careme");
  }

  let saldo = valorInicial - parcelaMensal;
  const i = taxaJuros / 100;
  let jurosTotais = 0;

  for (let mes = 1; mes <= meses; mes++) {
    const jurosMensal = saldo * i;
    jurosTotais += jurosMensal;
    saldo = (saldo + jurosMensal) - parcelaMensal;
  }

  return jurosTotais;
}
