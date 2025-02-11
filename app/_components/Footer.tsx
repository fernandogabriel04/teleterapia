const Footer = () => {
    return (
      <footer className="bg-blue-500 text-white py-8">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="text-lg opacity-80 mb-4">
            Teleterapia Gratuita - Apoiando sua saúde mental, sem custos e com total privacidade.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com/" target="_blank" className="hover:text-gray-200 transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="hover:text-gray-200 transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-gray-200 transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <p className="text-sm opacity-60">
            &copy; 2025 Teleterapia Gratuita. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  