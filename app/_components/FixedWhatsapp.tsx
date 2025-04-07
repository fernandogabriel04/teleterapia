import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {/* Mensagem */}
      <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg mb-3 shadow-lg cursor-default">
        Fale já com um psicólogo
      </div>

      {/* Ícone do WhatsApp */}
      <a
        href="https://wa.me/558233125492?text=Ol%C3%A1%21%20Gostaria%20de%20iniciar%20meu%20atendimento%20por%20teleterapia.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20para%20o%20pr%C3%B3ximo%20passo."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
