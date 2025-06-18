'use client'

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-opacity-0 text-white py-[3rem] px-6 md:px-[5rem]">
      <div className="relative mx-auto flex items-center justify-between px-6 z-[1]">
        {/* Título à esquerda */}
        <div className="flex items-center max-w-56 sm:max-w-[30rem]">
          <Link href="/">
            <Image src="/Logo.svg" alt="Logo" width={473} height={95} priority />
          </Link>
        </div>

        {/* Menu e Botões */}
        <div className="flex items-center gap-[1.5rem]">
          {/* Seções de navegação */}
          <nav className="hidden xl:flex tracking-normal text-[1rem] font-bold text-white space-x-5 whitespace-nowrap xl:space-x-3">
            <Link href="#hero" className="text-primary-green transition duration-300 font-extrabold">
              Início
            </Link>
            <Link href="#benefits" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
              Benefícios
            </Link>
            <Link href="#how-it-works" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
              Como Funciona
            </Link>
            <Link href="#feedbacks" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
              Depoimentos
            </Link>
            <Link href="#faq" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
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
        <div className="md:hidden flex flex-col items-center bg-blue-500 text-white py-4 space-y-4">
          <Link href="#hero" className="text-primary-green transition duration-300 font-extrabold">
            Início
          </Link>
          <Link href="#benefits" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
            Benefícios
          </Link>
          <Link href="#how-it-works" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
            Como Funciona
          </Link>
          <Link href="#feedbacks" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
            Depoimentos
          </Link>
          <Link href="#faq" className="hover:text-primary-green transition duration-300 hover:font-extrabold">
            Perguntas
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
