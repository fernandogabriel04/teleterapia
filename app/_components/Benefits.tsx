
import BenefitsCards from "./BenefitsCards";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative overflow-hidden px-6 max-w-full mx-auto gap-8 -mb-48 -mt-64 z-[1]">
      <div className="relative top-[22rem] -bottom-[448px] right-0 -left-[12rem] min-w-[2400px] min-h-[6px] rotate-[18deg] bg-primary-green z-[1]"></div>
      <BenefitsCards />
    </section>
  );
};

export default BenefitsSection;
