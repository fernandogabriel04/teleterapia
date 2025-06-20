import Image from "next/image";
import HeaderImage from "@/public/HowItWorks-Header.svg";
import qrcode from "@/public/QR-CODE.svg";
import Check from "./ui/check";

export default function SecureSection() {
    return (
        <section id="conhecer" className="bg-zinc-100 flex flex-col items-center pt-24 pb-28 overflow-hidden mb-[10rem] md:mb-0">
            {/* TITULO DA SEÇÃO */}
            <div className="flex justify-center items-center text-5xl md:text-6xl lg:text-9xl text-primary-blue font-neulis leading-none font-[500] lg:font-[1000] gap-2">
                <span
                    className="scale-x-[0.4] scale-y-150 origin-right -mr-[0.5rem]"
                    style={{ WebkitTextStroke: '6px #0080ff' }} // substitua pela cor da borda desejada
                >
                    GRATUITO
                </span>
                <span className="mb-4">|</span>
                <span
                    className="scale-x-95 scale-y-150"
                    style={{ WebkitTextStroke: '9px #0080ff' }}
                >
                    SEGURO
                </span>
                <span className="mb-4">|</span>
                <span
                    className="scale-x-[0.4] scale-y-150 origin-left -ml-[0.5rem]"
                    style={{ WebkitTextStroke: '6px #0080ff' }}
                >
                    SIGILOSO
                </span>
            </div>

            {/* CONTEUDO DA SEÇÃO */}
            <div className="rounded-3xl bg-primary-blue mt-72 mb-[4rem]">
                {/* Imagem de Header */}
                <div className="-mt-[10rem] lg:-mt-[16.5rem] relative flex-1 w-[30rem] md:w-full mx-auto">
                    <Image
                        priority
                        src={HeaderImage}
                        alt="Imagem de cabeçalho"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Conteudo */}
                <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto my-0 pt-10">
                    {/* Esquerdo */}
                    <div className="flex flex-col items-center justify-center gap-4 text-white text-2xl p-8 border-[4px] border-white rounded-[4rem] w-[70%] md:w-1/2">
                        <div className="flex flex-col items-start justify-center gap-4 text-white text-2xl p-7 font-univia">
                            <Check
                                title={<h1 className="flex flex-col lg:flex-row">Atendimento <span className="font-extrabold">100% gratuito</span></h1>}
                            />
                            <Check
                                title={<h1>Suporte psicológico <span className="font-extrabold">imediato</span></h1>}
                            />
                            <Check
                                title={<h1>Disponível <span className="font-extrabold">24 horas,</span> todos os dias</h1>}
                            />
                            <Check
                                title={<h1><span className="font-extrabold">Sem</span> encaminhamento</h1>}
                            />
                        </div>
                    </div>
                    {/* Direito */}
                    <div className="flex flex-col items-center justify-center gap-4 text-white text-2xl p-3 rounded-3xl w-[90%] md:w-1/2">
                        <div className="flex flex-col items-center justify-center gap-5 text-white text-2xl p-8 ">
                            <h1 className="font-univia font-extrabold text-[2rem] pb-5 whitespace-nowrap md:text-[4rem]">Quem pode <span style={{ WebkitTextStroke: '2px #fff' }}>usar?</span></h1>

                            <Check variant="second" title={<h2>Pessoas que enfrentam <span className="font-extrabold">ansiedade, depressão</span> e outros desafios emocionais.</h2>} />
                            <Check variant="second" title={<h2><span className="font-extrabold">Mães sobrecarregadas</span> e precisando de apoio.</h2>} />
                            <Check variant="second" title={<h2><span className="font-extrabold">Trabalhadores estressados</span> ou com burnout.</h2>} />
                            <Check variant="second" title={<h2>Qualquer pessoa <span className="font-extrabold">que sinta necessidade de conversar </span>com um profissional.</h2>} />

                        </div>
                    </div>
                </div>
                <div className="bg-[#00ff82] w-full flex flex-row py-7 px-10 items-center justify-between gap-5 lg:rounded-[4rem] h-auto md:-mb-[4rem] lg:-ml-[2rem] lg:w-[50%]">
                    <Image src={qrcode} alt="Imagem de cabeçalho" width={140} height={40} className="object-cover" />
                    <h1 className="text-[#0e59a5] font-semibold text-xl md:text-2xl"><span className="font-extrabold">Aponte a câmera do celular para o QR CODE</span> e receba atendimento via Whatsapp</h1>
                </div>
            </div>
        </section>
    )
}