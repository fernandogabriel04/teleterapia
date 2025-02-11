import Image from "next/image";

const TestimonialsSection = () => {
    return (
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12">
            O que Nossos Pacientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src="/owl-perfil.png"
                  width={100}
                  height={100}
                  alt="Paciente"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                A experiência foi transformadora. Finalmente encontrei o apoio
                que precisava para superar meus desafios emocionais.
              </p>
              <h4 className="text-xl font-semibold text-blue-500">
                João Silva
              </h4>
              <p className="text-sm text-gray-500">Paciente</p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
              <Image
                  src="/owl-perfil.png"
                  width={100}
                  height={100}
                  alt="Paciente"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                As sessões de teleterapia me ajudaram a lidar melhor com a
                ansiedade e a entender melhor minhas emoções.
              </p>
              <h4 className="text-xl font-semibold text-blue-500">
                Maria Oliveira
              </h4>
              <p className="text-sm text-gray-500">Paciente</p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
              <Image
                  src="/owl-perfil.png"
                  width={100}
                  height={100}
                  alt="Paciente"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Nunca imaginei que a terapia online fosse tão eficaz. Me sinto
                acolhido e seguro em todas as sessões.
              </p>
              <h4 className="text-xl font-semibold text-blue-500">
                Carlos Santos
              </h4>
              <p className="text-sm text-gray-500">Paciente</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  