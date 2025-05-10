import { FiSend, FiUser } from "react-icons/fi";
import Input from "./Input";
import Textarea from "./Textarea";
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";
import Footer from "./Footer";

const FooterSection = () => {
    return (
      <>
      <section className="bg-primary-green text-primary-blue py-24 pb-56 flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl font-neulis">Conte-nos como a Teleterapia<br/>Maceió te ajudou</h1>
          <p>Deixe seu relato para incentivar outras pessoas também :)</p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2 items-stretch">
          {/* Coluna dos inputs */}
          <div className="flex flex-col gap-2 flex-1">
            <Input icon={<FiUser className="text-zinc-100" />} placeholder="Nome completo" />
            <Input icon={<MdPhoneAndroid className="text-zinc-100" />} placeholder="Telefone para contato * Não divulgaremos" />
            <Input icon={<MdOutlineEmail className="text-zinc-100" />} placeholder="E-mail * Não divulgaremos" />
          </div>

          {/* Textarea ocupando mesma altura dos inputs */}
          <div className="flex-1">
            <Textarea
              icon={<IoChatbubbles className="text-zinc-100" />}
              placeholder="Fale um pouco sobre como foi seu processo..."
              className="h-full resize-none"
            />
          </div>
          {/* Botão: ocupa duas colunas abaixo */}
          <div className="flex items-end col-start-2 row-start-2">
            <button className="px-8 py-4 rounded-full bg-white text-primary-green font-semibold flex items-center gap-2 font-neulis">
              Enviar minha mensagem
              <FiSend size={24} className="text-primary-green"/>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    );
  };
  
  export default FooterSection;
  