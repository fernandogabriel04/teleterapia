"use client"
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { GrSubtract } from "react-icons/gr";

export interface PropsInfoAccordion {
    title: string;
    description: string;
}

const InfoAccordion = ({ title, description }: PropsInfoAccordion) => {
    const [open, setOpen] = useState(false);
    const [textColor, setTextColor] = useState("text-[#007efc]");
    const [bgColor, setBgColor] = useState("bg-[#ffffff]");
    const [iconColor, setIconColor] = useState("text-[#00ff82]");
    const contentRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (open) {
            setTextColor("text-[#007efc]");
            setBgColor("bg-[#ffffff]");
            setIconColor("text-[#00ff82]");
        } else {
            setTextColor("text-[#ffffff]");
            setBgColor("bg-[#007efc]");
            setIconColor("text-[#ffffff]");
        }

        setOpen(!open);
    };

    return (
        <div
            className="flex flex-col w-full mt-3 cursor-pointer filter drop-shadow-[0px_47px_45px_rgba(0,0,0,0.31)]"
            onClick={handleClick}
        >
            <div
                className={`flex flex-row h-20 w-full items-center pl-16 rounded-full justify-between mb-4 ${bgColor} transition-colors duration-300`}
            >
                <p className={`font-sans text-2xl md:text-3xl ${textColor} font-semibold`}>
                    {title}
                </p>
                {!open && <FaPlus className={`${iconColor} mr-10`} />}
                {open && <GrSubtract className={`${iconColor} mr-10`} />}
            </div>

            <div
                ref={contentRef}
                className={`transition-all duration-500 ease-in-out overflow-hidden px-16 ${
                    open ? "max-h-[500px] py-8" : "max-h-0 py-0"
                } ${bgColor} rounded-[2rem]`}
                style={{ transitionProperty: "max-height, padding" }}
            >
                <p className={`text-xl ${textColor} text-justify`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default InfoAccordion;
