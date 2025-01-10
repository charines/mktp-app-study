import { useEffect } from "react";

function SearchInput(){
  useEffect(() => {
    // Previne carregamento duplicado do script
    if (!window.cseInitialized) {
      // Carrega o script do Google CSE
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=e02c56c1c63f5432a";
      script.async = true;
      document.body.appendChild(script);

      // Marca como carregado
      window.cseInitialized = true;
    }
  }, []);

  return (
    <div className="header__search">
      <div className="gcse-search"></div>
    </div>
  )
}

export default SearchInput;