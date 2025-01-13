function EntendaMais() {
  return (
    <section className="py-8 bg-base-200 text-center" id="entendamais">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        🎥 Entenda ainda mais sobre como pagar o IPVA com inteligência financeira!
      </h2>
      <p className="mb-4 text-sm md:text-base">
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
          <iframe
            src="https://www.youtube.com/embed/z0mVKE1E6KY"
            title="Vídeo sobre IPVA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
      <p className="text-lg">
        Esperamos que esta análise ajude você a tomar decisões financeiras cada vez melhores! 😊
      </p>
    </section>
  );
}

export default EntendaMais;
