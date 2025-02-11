import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Título à esquerda */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Seções de navegação ao centro */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#hero"
            className="hover:text-gray-200 transition duration-300"
          >
            Início
          </Link>
          <Link
            href="#benefits"
            className="hover:text-gray-200 transition duration-300"
          >
            Benefícios
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-gray-200 transition duration-300"
          >
            Como Funciona
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-200 transition duration-300"
          >
            Contato
          </Link>
        </nav>

        {/* Botão "Agendar Agora" à direita */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/seu-numero-whatsapp"
            target="_blank"
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Agendar Agora
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
