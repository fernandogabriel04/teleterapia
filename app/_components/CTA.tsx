import CTAButton from "./cta-button";

const CTA = () => {
    return (
      <section className="bg-white py-36 text-white text-center">
        <div className="max-w-6xl mx-auto px-6 text-blue-500">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pronto para Começar Sua Jornada de Cuidados?
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-16">
          Faça uma sessão de teleterapia com um psicólogo qualificado e comece a cuidar de sua saúde mental hoje.
          </p>
          <CTAButton />
        </div>
      </section>
    );
  };
  
  export default CTA;
  