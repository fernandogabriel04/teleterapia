import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white text-white py-4 px-6 shadow-lg fixed top-0 left-0 right-0 z-50">
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
            className="text-[#234C90] hover:text-blue-700 transition duration-300"
          >
            Início
          </Link>
          <Link
            href="#benefits"
            className="text-[#234C90] hover:text-blue-700 transition duration-300"
          >
            Benefícios
          </Link>
          <Link
            href="#how-it-works"
            className="text-[#234C90] hover:text-blue-700 transition duration-300"
          >
            Como Funciona
          </Link>
          <Link
            href="#feedbacks"
            className="text-[#234C90] hover:text-blue-700 transition duration-300"
          >
            Feedbacks
          </Link>
          <Link
            href="#faq"
            className="text-[#234C90] hover:text-blue-700 transition duration-300"
          >
            FAQ
          </Link>
        </nav>

        {/* Botão "Agendar Agora" à direita */}
        <div className="flex items-center">
          <Link
            href="https://wa.me/+558233125492"
            target="_blank"
            className="flex items-center bg-gradient-to-b from-[#3B82F6] to-[#234C90] text-[#EFF6FF] font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <FaWhatsapp className="mr-2 text-lg" />
            Atendimento 24h
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
