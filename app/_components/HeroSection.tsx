import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row justify-between items-start min-h-[800px] lg:min-h-screen px-6 md:px-[7rem] pt-24 mt-8 md:mt-0"
    >
      {/* Texto e Botões */}
      <div className="flex flex-col items-start max-w-full sm:max-w-2xl z-10 space-y-6">
        {/* Título */}
        <div className="flex flex-col items-start text-4xl md:text-5xl lg:text-[5rem] mb-6 font-univia">
          <span className="font-extrabold">Psicólogos,</span>
          <span className="italic font-bold">psicanalistas</span>
          <span className="font-normal lg:text-[4.5rem]">e terapeutas!</span>
        </div>

        {/* Descrição */}
        <p className="text-lg md:text-xl mb-8 font-univia text-white font-semibold opacity-90">
          Terapia online sem custo,<br />
          sempre que precisar!
        </p>

        {/* Botões */}
        <div className="flex flex-row items-center gap-3 sm:gap-5 -ml-8 flex-nowrap whitespace-nowrap">
          <a
            href="#conhecer"
            className="flex items-center bg-[#72f58b] text-primary-blue font-semibold py-2 px-6 sm:py-2 sm:px-8 rounded-full text-xs sm:text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Conhecer
            <FaArrowRightLong className="ml-2 text-2xl sm:text-3xl  font-bold" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=558233125492&text=Ol%C3%A1%21+%F0%9F%92%ACGostaria+de+iniciar+meu+atendimento+por+teleterapia.+Estou+entrando+em+contato+atrav%C3%A9s+do+site+e+preciso+de+orienta%C3%A7%C3%A3o+para+o+pr%C3%B3ximo+passo.&type=phone_number&app_absent=0
"
            target="_blank"
            className="flex items-center bg-white text-primary-blue font-semibold py-2 px-6 sm:py-2 sm:px-8 rounded-full text-xs sm:text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-md w-full"
          >
            Acessar atendimento
            <FaArrowRightLong className="ml-2 text-2xl sm:text-3xl font-bold" />
          </a>
        </div>


      </div>

      {/* Imagem à direita */}
      <div className="hidden lg:block relative z-10 w-auto h-auto">
        <Image
          priority
          src="/Banner.png"
          alt="Hero Image"
          width={1046}
          height={1582}
          className="object-cover -mt-[9rem] xl:-mt-[11rem] ml-16 xl:ml-32"
        />
      </div>
    </section>
  );
};

export default HeroSection;
