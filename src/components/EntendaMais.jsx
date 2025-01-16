function EntendaMais() {
  return (
    <section className="p-6 py-8 bg-base-200 text-center" id="entendamais">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        🎥 Entenda ainda mais sobre como pagar o IPTU com inteligência financeira!
      </h2>
      <p className="mb-4 md:text-black text-sm md:text-base">
        Assista ao vídeo do PhD em Educação Financeira, Reinaldo Domingos, no canal Dinheiro à Vista:
      </p>
      <div className="mb-4 flex justify-center">
        {/* Contêiner ajustado */}
        <div
          className="relative w-full max-w-lg"
          style={{
            aspectRatio: '16 / 9', // Garante a proporção 16:9
          }}
        >
        <iframe width="1920" height="1080" 
        src="https://www.youtube.com/embed/dm9pkpT58uw" 
        title="IPTU - é fundamental saber PAGAR!" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
        allowfullscreen>          
        </iframe>
        </div>
      </div>
      <p className="text-lg">
        Esperamos que esta análise ajude você a tomar decisões financeiras cada vez melhores! 😊
      </p>
    </section>
  );
}

export default EntendaMais;
