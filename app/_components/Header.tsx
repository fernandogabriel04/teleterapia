'use client'

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [LinkSelected, setLinkSelected] = useState<"#hero" | "#benefits" | "#feedbacks" | "#how-it-works" | "#faq">("#hero")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-opacity-0 text-white py-[3rem] px- md:px-[5rem]">
      <div className="relative mx-auto flex items-center justify-between px-6 z-[1]">
        {/* Título à esquerda */}
        <div className="flex items-center max-w-56 sm:max-w-[30rem]">
          <Link href="/">
            <Image src="/Logo.svg" alt="Logo" width={473} height={95} priority />
          </Link>
        </div>

        {/* Menu e Botões */}
        <div className="flex items-center gap-[1.5rem]">
          {/* Seções de navegação - Desktop */}
          <nav className="hidden tracking-normal text-[1rem] font-bold text-white space-x-5 whitespace-nowrap xl:flex xl:space-x-3">
            <Link onClick={() => setLinkSelected("#hero")} href="#hero" className={`transition duration-300 font-extrabold z-10  ${LinkSelected === "#hero" ? "text-primary-green" : "text-white" }`}>
              Início
            </Link>
            <Link onClick={() => setLinkSelected("#benefits")} href="#benefits" className={`transition duration-300 font-extrabold z-10  ${LinkSelected === "#benefits" ? "text-primary-green" : "text-white" }`}>
              Benefícios
            </Link>
            <Link onClick={() => setLinkSelected("#how-it-works")} href="#how-it-works" className={`transition duration-300 font-extrabold z-10  ${LinkSelected === "#how-it-works" ? "text-primary-green" : "text-white" }`}>
              Como Funciona
            </Link>
            <Link onClick={() => setLinkSelected("#feedbacks")} href="#feedbacks" className={`transition duration-300 font-extrabold z-10  ${LinkSelected === "#feedbacks" ? "text-primary-green" : "text-white" }`}>
              Depoimentos
            </Link>
            <Link onClick={() => setLinkSelected("#faq")} href="#faq" className={`transition duration-300 font-extrabold z-10  ${LinkSelected === "#faq" ? "text-primary-green" : "text-white" }`}>
              Perguntas
            </Link>
          </nav>

          {/* Botões "Agendar Agora" e ícones - Somente visível em telas médias e maiores */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=558233125492&text=%F0%9F%92%AC+Ol%C3%A1!+Gostaria+de+iniciar+meu+atendimento+por+teleterapia.+Estou+entrando+em+contato+atrav%C3%A9s+do+site+e+preciso+de+orienta%C3%A7%C3%A3o+para+o+pr%C3%B3ximo+passo.&type=phone_number&app_absent=0"
              target="_blank"
              className="flex items-center bg-white text-primary-blue font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 tracking-normal text-[1rem]"
            >
              <FaWhatsapp className="p-2 text-5xl" />
              Atendimento <span className="font-extrabold p-1 mr-2">24h</span>
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=558233125492&text=%F0%9F%92%AC+Ol%C3%A1!+Gostaria+de+iniciar+meu+atendimento+por+teleterapia.+Estou+entrando+em+contato+atrav%C3%A9s+do+site+e+preciso+de+orienta%C3%A7%C3%A3o+para+o+pr%C3%B3ximo+passo.&type=phone_number&app_absent=0" target="_blank">
              <FaInstagram className="text-[2rem]" />
            </Link>
          </div>

          {/* Menu Hamburguer - visível apenas em telas menores */}
          <button
            className="xl:hidden flex items-center justify-center p-2"
            onClick={toggleMenu}
          >
            <MdOutlineMenu className="text-3xl text-white" />
          </button>
        </div>
      </div>

      {/* Menu Dropdown - visível em telas menores */}
      {isMenuOpen && (
        <div className="bg-[#00000060] flex flex-col items-center text-white mt-6 py-4 space-y-4 z-10 rounded-lg md:hidden">
          <Link onClick={() => setLinkSelected("#hero")} href="#hero" className={`transition duration-300 z-10  ${LinkSelected === "#hero" ? "text-primary-green font-extrabold" : "text-white" }`}>
            Início
          </Link>
          <Link onClick={() => setLinkSelected("#benefits")} href="#benefits" className={`transition duration-300 z-10  ${LinkSelected === "#benefits" ? "text-primary-green font-extrabold" : "text-white" }`}>
            Benefícios
          </Link>
          <Link onClick={() => setLinkSelected("#how-it-works")} href="#how-it-works" className={`transition duration-300 z-10  ${LinkSelected === "#how-it-works" ? "text-primary-green font-extrabold" : "text-white" }`}>
            Como Funciona
          </Link>
          <Link onClick={() => setLinkSelected("#feedbacks")} href="#feedbacks" className={`transition duration-300 z-10  ${LinkSelected === "#feedbacks" ? "text-primary-green font-extrabold" : "text-white" }`}>
            Depoimentos
          </Link>
          <Link onClick={() => setLinkSelected("#faq")} href="#faq" className={`transition duration-300 z-10  ${LinkSelected === "#faq" ? "text-primary-green font-extrabold" : "text-white" }`}>
            Perguntas
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
