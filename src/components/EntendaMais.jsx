function EntendaMais() {
  return (
    <section className="px-6 py-12 bg-azul-50 flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-14" id="entendamais">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-5  text-white ">
        Entenda ainda mais sobre como pagar o material escolar com inteligência financeira
        </h1>
        <p className="mb-8  text-white text-sm md:text-base max-w-lg">
        Assista ao vídeo do PhD em Educação Financeira, Reinaldo Domingos, no canal Dinheiro à Vista.
        </p>
        <p className="mb-4  text-white text-sm md:text-base max-w-lg">Esperamos que esta análise ajude você a tomar decisões
          financeiras cada vez melhores!
        </p>
      </div>
      <div
        className="relative w-full max-w-lg"
        style={{
          aspectRatio: '16 / 9', // Garante a proporção 16:9
        }}
        >
        <iframe width="1920" height="1080" 
          src="https://www.youtube.com/embed/jYron2K676w" 
          title="COMO ECONOMIZAR DINHEIRO NO MATERIAL ESCOLAR" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
          allowFullScreen>          
        </iframe>
      </div>
    </section>
  );
}

export default EntendaMais;
