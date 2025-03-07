import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row justify-start items-center min-h-[700px] sm:min-h-[850px]  md:min-h-[1222px] lg:min-h-[918px] text-center bg-[#EFF6FF] text-white px-6 pt-24 mt-8 md:mt-0"
    >
      <div className="flex flex-col md:min-h-96 lg:flex-row max-w-6xl mx-auto items-center justify-between w-full space-between h-full">
          {/* Imagem Parceiros */}
          <Image
            src="parceiros.svg"
            alt="Parceiros"
            width={200}
            height={50}
            priority
            className="absolute top-[100px] w-auto h-auto max-w-64  md:max-w-sm lg:max-w-lg"
          />
        {/* Texto */}
        <div className="w-full md:w-auto md:h-auto lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 relative mt-28 sm:mt-16 md:-mt-60 md:-ml-40 lg:mt-0 lg:ml-0">
          
          <h1 className="text-blue-800 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight uppercase">
            Teleterapia <br /><span className="text-orange-400"> de Maceió</span>
          </h1>
          <p className="text-blue-500 text-[1rem] md:text-2xl mt-4 mb-8 opacity-80">
            Não silencie suas emoções. Fale com a gente.
          </p>
          <Link
            href="https://wa.me/+558233125492"
            target="_blank"
            className="bg-gradient-to-b from-[#3B82F6] to-[#234C90] text-[#EFF6FF] font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Faça sua Sessão no WhatsApp
          </Link>
        </div>

        {/* Div Imagens */}
        <div className="w-auto h-full relative md:h-auto lg:w-1/2 justify-center mb-[5rem] lg:-mr-10 lg:space-x-10 hidden sm:block">
          {/* Mensagem Campanha do mês */}
          <Image
            src="/campaings/campaings-march.svg"
            alt="Campanha do mês"
            width={200}
            height={50}
            priority
            className="absolute bottom-14 w-auto h-auto hidden md:block md:max-w-[550px] md:-left-80 lg:-left-14 xl:-left-0 lg:max-w-lg -left-4 animate-message animate-move-message"
          />
          {/* Imagem 24h */}
          <Image
            src="/24h.svg"
            alt="Ícones de 24 horas"
            width={100}
            height={100}
            priority
            className="absolute sm:left-10 sm:top-[50px] md:top-0 md:left-20 lg:left-[320px] xl:left-[430px] max-w-20 md:max-w-24 h-auto animate-move-24h"
          />
          {/* Imagem da Coruja */}
          <Image
            src="/owl.png"
            alt="Coruja representando a teleterapia gratuita"
            width={500}
            height={500}
            priority
            className="absolute -right-[100px] top-[50px] max-w-80 md:-top-20 lg:-left-20 xl:left-0 md:max-w-lg md:-right-44 z-0"
          />
          
        </div>

        {/* Imagem iscb */}
        <Image
            src="/iscb.svg"
            alt="Coruja representando a teleterapia gratuita"
            width={120}
            height={120}
            priority
            className="absolute right-5 bottom-[100px] w-auto h-auto max-w-64  md:max-w-sm lg:max-w-lg"
          />

        {/* Div de Parceiros no canto inferior direito, ocupando toda a largura */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-50 rounded-none z-10 items-center justify-center flex rounded-t-[60px]">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
