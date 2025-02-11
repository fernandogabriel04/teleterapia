const CTA = () => {
    return (
      <section className="bg-blue-500 py-36 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pronto para Começar Sua Jornada de Cuidados?
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-8">
            Agende uma sessão de teleterapia gratuita com um psicólogo qualificado e comece a cuidar de sua saúde mental hoje.
          </p>
          <a
            href="https://wa.me/seu-numero-whatsapp"
            target="_blank"
            className="bg-white text-blue-500 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Agende sua Sessão Agora
          </a>
        </div>
      </section>
    );
  };
  
  export default CTA;
  