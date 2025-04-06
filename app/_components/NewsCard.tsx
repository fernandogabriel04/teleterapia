import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { cn } from "../lib/utils";

interface NewsCardProps {
    image: string;
    className?: string;
    style?: React.CSSProperties;
}

const NewsCard = ({image, className, style}: NewsCardProps) => {
    return (
        <div className="overflow-hidden flex flex-col items-center justify-center gap-4">
            <Image src={`/${image}`} alt="" width={1000} height={1000} className="object-contain h-auto w-auto rounded-[4rem] max-w-[16rem]" />
            <a
                href="#"
                target="_blank"
                className={cn("flex items-center bg-[#72f58b] font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-full text-sm transition duration-300 transform hover:scale-105 -mt-10",
                className
                )}
                style={style}
            >
                Ler Mais
                <FaArrowRight className="ml-2 text-2xl sm:text-3xl  font-bold" />
            </a>
        </div>
    );
}

export default NewsCard;