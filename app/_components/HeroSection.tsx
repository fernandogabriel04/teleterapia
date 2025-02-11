import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row justify-center items-center min-h-screen text-center bg-blue-500 text-white px-6 pt-24"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between w-full space-between">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase">
            Teleterapia <br /> Gratuita
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 opacity-80">
            Não silencie suas emoções. Fale com a gente.
          </p>
          <Link
            href="https://wa.me/33125492"
            target="_blank"
            className="bg-white text-blue-500 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Agende sua Sessão no WhatsApp
          </Link>
        </div>

        {/* Imagem da coruja (visível apenas em telas maiores que 1024px) */}
        <div className="w-full md:w-1/2 justify-end hidden lg:flex">
          <div className="relative group mx-auto">
            {/* Adicionando um efeito de sombra suave na imagem ao passar o mouse */}
            <div className="absolute inset-0 opacity-30 rounded-lg group-hover:opacity-0 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,#fff,transparent_50%)] z-0"></div>
            <Image
              src="/owl-herosection.png"
              alt="Coruja representando a teleterapia gratuita"
              width={500} // Define tamanho otimizado
              height={500}
              priority // Para carregamento otimizado
              className="w-auto h-auto max-w-xs md:max-w-sm transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Div de Parceiros no canto inferior direito */}
        <div className="absolute bottom-0 right-0 min-w-[400px] h-[100px] bg-gray-50 rounded-tl-[20px] z-10 flex items-center justify-center">
          <Image
            src="/parceiros.png"
            alt="Parceiros"
            width={300}
            height={80}
            priority
            className="w-auto h-auto max-w-xs md:max-w-sm z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
