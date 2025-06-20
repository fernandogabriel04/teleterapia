'use client';

import React, { useEffect, useState } from "react";
import BenefitsCard from "./BenefitsCard";
import Image from "next/image";

const BenefitsCards = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null); // Inicializa como null

    useEffect(() => {
        // Só roda no cliente
        const handleResize = () => setWindowWidth(window.innerWidth);

        handleResize(); // Seta a largura inicial
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const benefits = [
        {
            icon: <Image src="/icons/Hands.svg" alt="Comodidade" width={83} height={69} priority />,
            title: "Acessibilidade",
            description: "Oferecemos atendimentos gratuitos, tornando a teleterapia acessível a todos.",
            color: "blue" as const,
        },
        {
            icon: <Image src="/icons/Care.svg" alt="Comodidade" width={83} height={69} priority />,
            title: "Profissionais Qualificados",
            description: "Todos os atendimentos são realizados por psicólogos experientes e qualificados, garantindo um serviço de qualidade.",
            color: "darkBlue" as const,
        },
        {
            icon: <Image src="/icons/Monitor.svg" alt="Comodidade" width={83} height={69} priority />,
            title: "Comodidade",
            description: "Realize suas sessões de psicoterapia no conforto da sua casa, sem sair do lugar.",
            color: "green" as const,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-8">
                {benefits.map((benefit, index) => (
                    <BenefitsCard
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        color={benefit.color}
                        className="w-full p-2 flex flex-col justify-start border-b-8 border-[#00000040] md:w-1/3"
                        style={{ marginTop: windowWidth !== null && windowWidth >= 768 ? `${index * 10}rem` : "4rem", }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BenefitsCards;
