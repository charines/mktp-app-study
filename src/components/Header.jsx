function Header() {
  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary">
          MinhaLogo
        </a>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-primary transition-colors">Início</a>
          <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
        </nav>

        {/* Botão CTA */}
        <a href="#cta" className="hidden md:block btn btn-primary">
          Comece Agora
        </a>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
