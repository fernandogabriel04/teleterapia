import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen text-center bg-blue-500 text-white"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-center space-between">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase">
            Teleterapia <br /> Gratuita
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 opacity-80">
            Você se surpreenderá. Fale com a gente.
          </p>
          <Link
            href="https://wa.me/seu-numero-whatsapp"
            target="_blank"
            className="bg-white text-blue-500 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Agende sua Sessão no WhatsApp
          </Link>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center bg-[radial-gradient(circle_at_50%_50%,#fff,transparent_35%)]">
          <Image
            src="/owl-herosection.png"
            alt="Coruja representando a teleterapia gratuita"
            width={500} // Define tamanho otimizado
            height={500}
            priority // Para carregamento otimizado
            className="w-auto h-auto max-w-xs md:max-w-sm"
          />
        </div>

        {/* Div de Parceiros no canto inferior direito */}
        <div className="absolute bottom-0 right-0 min-w-[400px] h-[100px] bg-gray-50 rounded-tl-[20px] z-10 flex items-center justify-center">
          <Image
            src="/parceiros.png"
            alt="Parceiros"
            width={300}
            height={80}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
