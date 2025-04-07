import InfoAccordion from "./InfoAccordion";
import { PropsInfoAccordion } from "./InfoAccordion";

const infos: Array<PropsInfoAccordion> = [
    {
        title: "Como posso agendar minha sessão?",
        description: "Você pode agendar sua sessão diretamente pelo link do WhatsApp disponível na página."
    },
    {
        title: "As sessões são realmente gratuitas?",
        description: " Sim, todas as sessões são totalmente gratuitas, sem qualquer custo para você"
    },
    {
        title: "Preciso de algum equipamento específico?",
        description: "Apenas um dispositivo com acesso à internet e o WhatsApp são necessários para realizar a sessão."
    },
    {
        title: "Como garantir privacidade durante a sessão?",
        description: "As sessões são realizadas de forma privada, garantindo o sigilo absoluto das suas informações e sentimentos."
    }
]

const FAQ = () => {
    return (

        <section className="flex flex-col w-full items-center bg-white pt-20">
            <div className="flex flex-row w-[90%] items-center justify-around">
                <div className="h-1 bg-[#00ff82] w-[17%] rounded-full"></div>
                <div className="text-[#007efc] font-neulis text-center text-6xl [--stroke-color:#007efc] [-webkit-text-stroke:2px_var(--stroke-color)]">Perguntas frequentes</div>
                <div className="h-1 bg-[#00ff82] w-[17%] rounded-full"></div>
            </div>
            <div className="flex flex-col w-[90%] mt-10">
                {infos.map((info, index) => (
                    <InfoAccordion
                        key={index}
                        title={info.title}
                        description={info.description}
                    />
                ))}
            </div>
            <div className="flex flex-row w-[90%] items-center justify-around mt-14">
                <div className="h-1 bg-[#db9a6e] w-[20%] md:w-[33%] rounded-full"></div>
                <div className="flex flex-col h-14 w-[60%] md:w-[34%] bg-[#db9a6e] rounded-full justify-center">
                    <p className="text-center text-white font-sans text-lg font-black">Seja atendido agora mesmo!</p>
                </div>
                <div className="h-1 bg-[#db9a6e] w-[20%] md:w-[33%] rounded-full"></div>
            </div>
        </section>
    );
}

export default FAQ