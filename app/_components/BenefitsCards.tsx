import React from "react";
import BenefitsCard from "./BenefitsCard";
import Image from "next/image";

const BenefitsCards = () => {
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
      description: "Realize suas sessões de terapia no conforto da sua casa, sem sair do lugar.",
      color: "green" as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative top-full -bottom-[448px] right-0 -left-32 z-0 min-w-[2000px] min-h-[4px] rotate-[18deg] bg-primary-green"></div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
        {benefits.map((benefit, index) => (
          <BenefitsCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            color={benefit.color}
            className="w-full md:w-1/3 h-[320px] flex flex-col justify-start"
            style={{ marginTop: `${index * 10}rem` }}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsCards;
