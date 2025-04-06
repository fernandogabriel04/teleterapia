import Image from "next/image";
import HeaderImage from "@/public/HowItWorks-Header.svg";
import qrcode from "@/public/QR-CODE.svg";
import Check from "./ui/check";

export default function SecureSection() {
    return (
        <section className="bg-zinc-100 flex flex-col items-center py-24 overflow-hidden">
            {/* TITULO DA SEÇÃO */}
            <div className="flex justify-center items-center text-9xl text-primary-blue font-neulis leading-none font-[1000] gap-2">
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
            <div className="rounded-3xl bg-primary-blue mt-72">
                {/* Imagem de Header */}
                <div className="-mt-[16.5rem] relative flex-1 w-full">
                    <Image
                        src={HeaderImage}
                        alt="Imagem de cabeçalho"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Conteudo */}
                <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto my-0 px-8 gap-4">
                    {/* Esquerdo */}
                    <div className="flex flex-col items-center justify-center gap-4 text-white text-2xl p-8 border-[4px] border-white rounded-[4rem] w-1/2">
                        <div className="flex flex-col items-start justify-center gap-4 text-white text-2xl p-8 font-univia">
                            <Check 
                                title={<h1>Atendimento <span className="font-extrabold">100% gratuito</span></h1>} 
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
                    <div className="flex flex-col items-center justify-center gap-4 text-white text-2xl p-8 rounded-3xl w-1/2">
                        <div className="flex flex-col items-center justify-center gap-4 text-white text-2xl p-8">
                            <h1 className="font-univia font-extrabold text-[4.3rem] whitespace-nowrap">Quem pode <span style={{ WebkitTextStroke: '3px #fff' }}>usar?</span></h1>

                            <Check variant="second" title={<h2>Pessoas que enfrentam <span className="font-extrabold">ansiedade, depressão</span> e outros desafios emocionais.</h2>} />
                            <Check variant="second" title={<h2><span className="font-extrabold">Mães sobrecarregadas</span> e precisando de apoio.</h2>} />
                            <Check variant="second" title={<h2><span className="font-extrabold">Trabalhadores estressados</span> ou com burnout.</h2>} />
                            <Check variant="second" title={<h2>Qualquer pessoa <span className="font-extrabold">que sinta necessidade de conversar </span>com um profissional.</h2>} />
                            
                            <h2></h2>
                        </div>

                    </div>
                </div>
                <div className="bg-[#00ff82] flex flex-row items-center justify-center gap-4 p-4 rounded-e-[4rem] w-[40rem] h-[15rem] px-[4.5rem] -mb-[4rem] -ml-[4rem]">
                    <Image src={qrcode} alt="Imagem de cabeçalho" width={140} height={40} className="object-cover" />
                    <h1 className="text-[#0e59a5] font-semibold"><span className="font-extrabold">Aponte a câmera do celular para o QR CODE</span> e receba atendimento via Whatsapp</h1>
                </div>
            </div>
        </section>
    )
}