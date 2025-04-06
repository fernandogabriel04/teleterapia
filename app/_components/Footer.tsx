import Image from "next/image";
import rota from "@/public/rota3.svg";
import prefeituraMCZ from "@/public/prefeituraMCZ.svg";
import footerTeleterapia from "@/public/footer-teleterapia.svg";
import iscb from "@/public/iscb.svg";

export default function Footer() {
    return (
        <footer className="bg-zinc-300 px-14 flex flex-col items-center justify-center min-h-[304px]">
            <div className="flex items-center justify-center w-full py-4 gap-16 bg-zinc-100 rounded-3xl relative -top-[5.4rem] shadow-xl">
                <div className="flex-1 max-w-[150px]">
                    <Image
                    src={footerTeleterapia}
                    alt="logo teleterapia"
                    className="w-full h-auto object-contain"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Image
                    src={prefeituraMCZ}
                    alt="logo prefeitura mcz"
                    className="w-auto h-auto object-contain max-w-[250px]"
                    />
                    <p className="text-secondary-blue font-sans font-bold text-center w-fit">
                    Secretaria Municipal <br /> de Saúde de Maceió
                </p>
                </div>
                <div className="flex-1 max-w-[150px]">
                    <Image
                    src={iscb}
                    alt="logo iscb"
                    className="w-full h-auto object-contain"
                    />
                </div>
            </div>
            <Image
            src={rota}
            alt="logo rota3"
            className="size-4 relative -top-16 text-zinc-300 opacity-20"
            />
        </footer>
    )
}