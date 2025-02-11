const BenefitsSection = () => {
    return (
        <section id="benefits" className="bg-gray-50 py-36">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12">
                    Benefícios da Teleterapia Gratuita
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 text-white p-6 rounded-full mb-6">
                            <i className="fas fa-headset text-4xl"></i>{" "}
                            {/* Icone de headset */}
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Acessibilidade</h3>
                        <p className="text-lg opacity-80">
                            Oferecemos atendimentos psicológicos gratuitos, tornando o apoio
                            psicológico acessível a todos.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 text-white p-6 rounded-full mb-6">
                            <i className="fas fa-user-md text-4xl"></i>{" "}
                            {/* Icone de psicologo */}
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            Profissionais Qualificados
                        </h3>
                        <p className="text-lg opacity-80">
                            Todos os atendimentos são realizados por psicólogos experientes
                            e qualificados, garantindo um serviço de qualidade.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 text-white p-6 rounded-full mb-6">
                            <i className="fas fa-comments text-4xl"></i>{" "}
                            {/* Icone de conversa */}
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Comodidade</h3>
                        <p className="text-lg opacity-80">
                            Realize suas sessões de terapia no conforto da sua casa, sem
                            sair do lugar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
