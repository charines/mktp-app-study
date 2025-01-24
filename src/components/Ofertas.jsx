import imgMulhercupom from '../assets/img/Cupom.webp'

function Ofertas() {
  return (
    <section className="flex justify-center items-center gap-20 pb-8 md:pb-16 pt-96 bg-white px-6">
      <div className='hidden lg:block'>
        <img width="750" heigth="658" src={imgMulhercupom}  />
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-6 text-[#000000]'>Aproveite Ofertas Exclusivas!</h1> 
        <p className='text-[#000000] text-xl  mb-5 max-w-lg'>Para facilitar ainda mais a sua jornada financeira, estamos
        disponibilizando dois cupons especiais:</p>
        <div className='mb-9'>
          <p className='text-[#000000] text-xl  mb-4 max-w-lg font-semibold'>15% de desconto no livro Terapia Financeira<br/>
              Use o código: MAT15-LIVRO</p> 
          {/* Botões Informativos */}
          <a
            href="https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-sm md:text-lg text-white px-4 py-2 w-full md:w-auto bg-[#2d2978] font-semibold inline-block text-center">
            Acesse agora mesmo a Loja DSOP e aproveite!
          </a>          
        </div>
        <div>
          <p className='text-[#000000] text-xl  mb-4 max-w-lg font-semibold' >15% de desconto no curso EAD Educação do
            Comportamento Financeiro<br/>
            Use o código: MAT15-CURSO
          </p>
          <a
            href="https://dsop.com.br/marketplace/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-sm md:text-lg text-white px-4 py-2 w-full md:w-auto bg-[#2d2978] font-semibold inline-block text-center">
            Acesse a nossa página e garanta o seu curso!
          </a>          
        </div>
      </div>
    </section>
  );
}

export default Ofertas;
