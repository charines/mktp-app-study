function Ofertas() {
  return (
    <section className="py-8 bg-primary text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Aproveite Ofertas Exclusivas!</h2>
      <p className="mb-4">
        Para facilitar ainda mais a sua jornada financeira, estamos disponibilizando dois cupons especiais:
      </p>
      <div className="mb-4">
        <p>📚 <strong>15% de desconto no livro Terapia Financeira</strong></p>
        <p>Use o código: <strong>MAT15-LIVRO</strong></p>
        <a
          href="https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline"
        >
          Acesse agora mesmo a Loja DSOP e aproveite!
        </a>
      </div>
      <div>
        <p>💻 <strong>15% de desconto no curso EAD Educação do Comportamento Financeiro</strong></p>
        <p>Use o código: <strong>MAT15-CURSO</strong></p>
        <a
          href="https://dsop.com.br/marketplace/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline"
        >
          Acesse a nossa página e garanta o seu curso!
        </a>
      </div>
    </section>
  );
}

export default Ofertas;
