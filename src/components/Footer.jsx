function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p className="text-lg mb-4">Siga-nos nas redes sociais:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.instagram.com/dsop.oficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/DSOPEducacaoFinanceira"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/company/dsopoficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Linkedin
        </a>
        <a
          href="https://www.youtube.com/c/Dinheiro%C3%A0vista"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          YouTube Dinheiro à Vista
        </a>
      </div>
      <p className="mt-4">Abraços,</p>
      <p className="font-bold">Equipe DSOP Educação Financeira</p>
    </footer>
  );
}

export default Footer;
