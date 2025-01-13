import { useEffect } from "react";

function LanguageSelector(){
  useEffect(() => {
    // Configuração das bandeiras
    window.gtranslateSettings = {
      default_language: "pt",
      native_language_names: true,
      detect_browser_language: true,
      languages: ["pt", "es", "en"],
      wrapper_selector: ".gtranslate_wrapper",
      flag_size: 20,
      alt_flags: {
        en: "usa",
        pt: "brazil"
      },
    };

    // Carregar o script do GTranslate via componente
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/flags.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpar o script para evitar duplicação
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default LanguageSelector;
