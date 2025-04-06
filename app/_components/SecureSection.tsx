import Image from "next/image";
import iconsList from "@/public/icons-list.svg";

export default function SecureSection() {
    return (
        <section className="bg-zinc-100 flex flex-col items-center pt-24 overflow-hidden">
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
                style={{ WebkitTextStroke: '12px #0080ff' }}
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
            <div className="rounded-3xl bg-primary-blue mt-56">
                <div>
                    <Image src={iconsList} alt="lista de ícones"/>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <h3></h3>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}