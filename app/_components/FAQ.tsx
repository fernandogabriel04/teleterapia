import InfoAccordion from "./InfoAccordion";
import { PropsInfoAccordion } from "./InfoAccordion";

const infos: Array<PropsInfoAccordion> = [
    {
        title: "Como posso agendar minha sessão?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero, amet nisi minus quis quasi error soluta tenetur eius in perferendis accusantium dicta. Fugit nobis animi laboriosam, dolorum repudiandae labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure, omnis aliquam eveniet in facere quos enim necessitatibus quis culpa rerum atque! Voluptatum, nemo. Consequuntur eveniet ab voluptatum iste sapiente!"
    },
    {
        title: "As sessões são realmente gratuitas?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero, amet nisi minus quis quasi error soluta tenetur eius in perferendis accusantium dicta. Fugit nobis animi laboriosam, dolorum repudiandae labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure, omnis aliquam eveniet in facere quos enim necessitatibus quis culpa rerum atque! Voluptatum, nemo. Consequuntur eveniet ab voluptatum iste sapiente!"
    },
    {
        title: "Preciso de algum equipamento específico?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero, amet nisi minus quis quasi error soluta tenetur eius in perferendis accusantium dicta. Fugit nobis animi laboriosam, dolorum repudiandae labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure, omnis aliquam eveniet in facere quos enim necessitatibus quis culpa rerum atque! Voluptatum, nemo. Consequuntur eveniet ab voluptatum iste sapiente!"
    },
    {
        title: "Como garantir privacidade durante a sessão?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero, amet nisi minus quis quasi error soluta tenetur eius in perferendis accusantium dicta. Fugit nobis animi laboriosam, dolorum repudiandae labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure, omnis aliquam eveniet in facere quos enim necessitatibus quis culpa rerum atque! Voluptatum, nemo. Consequuntur eveniet ab voluptatum iste sapiente!"
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