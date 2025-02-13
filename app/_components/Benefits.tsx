import { FaHeadset, FaRegComments, FaRegUser } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-gray-50 py-36">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12">
          Benefícios da Teleterapia Gratuita
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefício 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#3B82F6] to-[#234C90] text-white p-6 rounded-full mb-6">
              <FaHeadset className="text-4xl" /> {/* Ícone de headset */}
            </div>
            <h3 className="text-xl text-black opacity-100 font-semibold mb-4">Acessibilidade</h3>
            <p className="text-lg text-black opacity-100">
              Oferecemos atendimentos gratuitos, tornando a teleterapia acessível a todos.
            </p>
          </div>

          {/* Benefício 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#3B82F6] to-[#234C90] text-white p-6 rounded-full mb-6">
              <FaRegUser className="text-4xl" /> {/* Ícone de psicólogo */}
            </div>
            <h3 className="text-xl text-black opacity-100 font-semibold mb-4">Profissionais Qualificados</h3>
            <p className="text-lg text-black opacity-100">
              Todos os atendimentos são realizados por psicólogos experientes
              e qualificados, garantindo um serviço de qualidade.
            </p>
          </div>

          {/* Benefício 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#3B82F6] to-[#234C90] text-white p-6 rounded-full mb-6">
              <FaRegComments className="text-4xl" /> {/* Ícone de conversa */}
            </div>
            <h3 className="text-xl text-black opacity-100 font-semibold mb-4">Comodidade</h3>
            <p className="text-lg text-black opacity-100">
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
