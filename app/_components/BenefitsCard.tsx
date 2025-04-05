import React, { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface BenefitsCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    color: "blue" | "green" | "darkBlue";
    className?: string;
    style?: React.CSSProperties;
}

const BenefitsCard = ({ icon, title, description, color, className, style }: BenefitsCardProps) => {
    const colorStyles = {
        blue: "bg-[#006bd6] text-white",
        darkBlue: "bg-[#0053a5] text-white",
        green: "bg-[#4FAF6C] text-white",
    };
    const iconStyles = {
        blue: "bg-[#0053a5] text-white",
        darkBlue: "bg-[#006bd6] text-white",
        green: "bg-[#00ff82] text-white",
    };

    return (
        <div
            className={cn(
                "rounded-[3.8rem] max-w-[20rem] flex flex-col items-center text-center  z-[2] relative transform transition-all duration-500 group",
                colorStyles[color],
                className
            )}
            style={style}
        >
            {/* Ícone dentro do card */}
            <div className={cn("min-w-[13rem] min-h-[10rem] rounded-[3.8rem] flex items-center justify-center -mt-12", iconStyles[color])}>
                {icon}
            </div>

            <div className="flex flex-col items-center justify-start p-4">
                <h3 className="text-2xl font-bold mb-4 font-neulis text-[2rem]">{title}</h3>
                <p className={cn("text-[1rem] mb-4", color === "green" ? "text-white/90" : "text-tele-50")}>{description}</p>
            </div>
        </div>
    );
};

export default BenefitsCard;
