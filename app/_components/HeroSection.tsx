import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row justify-start items-center md:min-h-screen text-center bg-gradient-to-b from-[#3B82F6] to-[#234C90] text-white px-6 pt-24 mt-8 md:mt-0"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between w-full space-between h-auto">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight uppercase">
            Teleterapia <br /> Gratuita
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 opacity-80">
            Não silencie suas emoções. Fale com a gente.
          </p>
          <Link
            href="https://wa.me/+558233125492"
            target="_blank"
            className="bg-white text-blue-500 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Faça sua Sessão no WhatsApp
          </Link>
        </div>

        {/* Imagem da coruja */}
        <div className="w-full flex lg:w-1/2 justify-center md:justify-end z-20 mb-[5rem]">
          <div className="relative group mx-auto">
            {/* Adicionando um efeito de sombra suave na imagem ao passar o mouse */}
            <div className="absolute inset-0 opacity-30 rounded-lg group-hover:opacity-0 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,#fff,transparent_50%)] z-0"></div>
            <Image
              src="/owl-herosection.png"
              alt="Coruja representando a teleterapia gratuita"
              width={500}
              height={500}
              priority
              className="relative w-auto h-auto max-w-48 md:max-w-sm transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Div de Parceiros no canto inferior direito, ocupando toda a largura */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-50 rounded-none z-10 items-center justify-center flex">
          <Image
            src="/parceiros.png"
            alt="Parceiros"
            width={300}
            height={80}
            priority
            className="relative w-auto h-auto max-w-xs md:max-w-sm z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
