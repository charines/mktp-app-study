function EntendaMais() {
  return (
    <section className="py-8 bg-base-200 text-center">
      <h2 className="text-2xl font-bold mb-4">
        🎥 Entenda ainda mais sobre como pagar o IPVA com inteligência financeira!
      </h2>
      <p className="mb-4">
        Assista ao vídeo do PhD em Educação Financeira, Reinaldo Domingos, no canal Dinheiro à Vista:
      </p>
      <div className="mb-4 flex justify-center">
        {/* Embed do vídeo */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/z0mVKE1E6KY" // Substitua SEU_VIDEO_ID pelo ID do vídeo real
          title="Vídeo sobre IPVA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-lg">
        Esperamos que esta análise ajude você a tomar decisões financeiras cada vez melhores! 😊
      </p>
    </section>
  );
}

export default EntendaMais;
