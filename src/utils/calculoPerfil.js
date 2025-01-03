export function calcularPerfil(respostas) {
  const contagem = { PO: 0, PE: 0, AT: 0, AI: 0 };

  // Percorre todas as respostas e contabiliza cada perfil
  respostas.forEach((resposta) => {
    if (contagem[resposta] !== undefined) {
      contagem[resposta]++;
    }
  });

  // Determina o perfil dominante com base no maior valor na contagem
  const perfilDominante = Object.keys(contagem).reduce((a, b) => (contagem[a] > contagem[b] ? a : b));

  return perfilDominante;
}
