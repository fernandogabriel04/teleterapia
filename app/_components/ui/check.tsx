import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface CheckProps {
    className?: string;
    title: ReactNode;
    variant?: "default" | "second"; // Definindo o tipo de variante
}

const Check = ({ title, className, variant = "default" }: CheckProps) => {
    return (
        <div
            className={cn(
                "flex flex-row items-center justify-center gap-2 text-white text-2xl",
                className
            )}
        >
            {variant === "second" ? (
                <Image src="/check.svg" alt="Check" width={60} height={60} className="mb-10" /> // Usando o SVG
            ) : (
                <FaCheckCircle className="text-[#2fbd5a] bg-white rounded-full" /> // Ícone padrão
            )}
            {title}
        </div>
    );
};

export default Check;
