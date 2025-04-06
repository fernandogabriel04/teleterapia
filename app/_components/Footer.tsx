import Image from "next/image";
import rota from "@/public/rota3.svg";
import prefeituraMCZ from "@/public/prefeituraMCZ.svg";
import minorPrefeituraMCZ from "@/public/minor-prefeituraMCZ.svg";
import footerTeleterapia from "@/public/footer-teleterapia.svg";
import iscb from "@/public/iscb.svg";

export default function Footer() {
    return (
        <footer className="bg-zinc-300 px-14 flex flex-col items-center justify-center min-h-[304px]">
            <div className="flex items-center justify-center w-full py-4 gap-4 md:gap-16 bg-zinc-100 rounded-3xl relative -top-36 shadow-xl px-4">
                <div className="flex-1 max-w-[150px]">
                    <Image
                    src={footerTeleterapia}
                    alt="logo teleterapia"
                    className="w-full h-auto object-contain"
                    />
                </div>
                <div className="flex-1 flex items-center gap-4 max-w-[500px] justify-center">
                    <Image
                        src={minorPrefeituraMCZ}
                        alt="logo prefeitura mcz"
                        className="w-full h-auto object-contain max-w-[150px] md:hidden"
                    />
                    <Image
                        src={prefeituraMCZ}
                        alt="logo prefeitura mcz"
                        className="w-full h-auto object-contain max-w-[250px] hidden md:block"
                    />
                    <p className="text-secondary-blue object-contain text-base font-sans font-bold text-center w-fit hidden md:block">
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
            className="size-4 relative -top-28 text-zinc-300 opacity-20"
            />
        </footer>
    )
}