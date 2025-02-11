"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-6">
          {/* Pergunta 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => toggleAnswer(1)}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-blue-500">Como posso agendar minha sessão?</h3>
              <span className="text-blue-500 text-2xl">{openIndex === 1 ? "-" : "+"}</span>
            </div>
            {openIndex === 1 && (
              <p className="mt-4 text-lg text-gray-700">
                Você pode agendar sua sessão diretamente pelo link do WhatsApp disponível na página.
              </p>
            )}
          </div>

          {/* Pergunta 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => toggleAnswer(2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-blue-500">As sessões são realmente gratuitas?</h3>
              <span className="text-blue-500 text-2xl">{openIndex === 2 ? "-" : "+"}</span>
            </div>
            {openIndex === 2 && (
              <p className="mt-4 text-lg text-gray-700">
                Sim, todas as sessões são totalmente gratuitas, sem qualquer custo para você.
              </p>
            )}
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => toggleAnswer(3)}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-blue-500">Preciso de algum equipamento específico?</h3>
              <span className="text-blue-500 text-2xl">{openIndex === 3 ? "-" : "+"}</span>
            </div>
            {openIndex === 3 && (
              <p className="mt-4 text-lg text-gray-700">
                Apenas um dispositivo com acesso à internet e o WhatsApp são necessários para realizar a sessão.
              </p>
            )}
          </div>

          {/* Pergunta 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => toggleAnswer(4)}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-blue-500">Como posso garantir a privacidade durante a sessão?</h3>
              <span className="text-blue-500 text-2xl">{openIndex === 4 ? "-" : "+"}</span>
            </div>
            {openIndex === 4 && (
              <p className="mt-4 text-lg text-gray-700">
                As sessões são realizadas de forma privada, garantindo o sigilo absoluto das suas informações e sentimentos.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
