const HowItWorksSection = () => {
    return (
      <section id="how-it-works" className="bg-blue-50 py-36">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Passo 1 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-6">
                <i className="fas fa-calendar-check text-4xl"></i>{" "}
                {/* Ícone de agendamento */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Agende sua Sessão</h3>
              <p className="text-lg opacity-80">
                Clique no link para agendar sua sessão via WhatsApp. Escolha um
                horário que melhor se adapte à sua rotina.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-6">
                <i className="fas fa-phone-alt text-4xl"></i>{" "}
                {/* Ícone de chamada */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Inicie a Sessão</h3>
              <p className="text-lg opacity-80">
                Após o agendamento, um psicólogo qualificado entrará em contato
                pelo WhatsApp para iniciar a sua sessão de terapia.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-6">
                <i className="fas fa-thumbs-up text-4xl"></i>{" "}
                {/* Ícone de aprovação */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Receba o Apoio</h3>
              <p className="text-lg opacity-80">
                Ao final da sessão, você terá o apoio necessário para lidar com
                suas questões, com dicas e orientações para seu bem-estar.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorksSection;
  