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
        href="https://wa.me/+558233125492"
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
