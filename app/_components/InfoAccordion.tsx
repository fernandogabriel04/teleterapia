"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GrSubtract } from "react-icons/gr";

export interface PropsInfoAccordion {
    title: string;
    description: string; 
}

const InfoAccordion = ({title, description}: PropsInfoAccordion) => {
    
    const [open, setOpen] = useState(false)
    const [textColor, setTextColor] = useState('text-[#007efc]')
    const [bgColor, setBgColor] = useState('bg-[#ffffff]')
    const [iconColor, setIconColor] = useState('text-[#00ff82]')

    const handleClick = () => {

        if(open){
            setTextColor('text-[#007efc]')
            setBgColor('bg-[#ffffff]')
            setIconColor('text-[#00ff82]')
        } else{
            setTextColor('text-[#ffffff]')
            setBgColor('bg-[#007efc]')
            setIconColor('text-[#ffffff]')
        }

        setOpen(!open)
    }
    return (
        <div className="flex flex-col w-full mt-3 cursor-pointer filter drop-shadow-[0px_47px_45px_rgba(0,0,0,0.31)]"
            onClick={handleClick}
        >
        
            <div className={`flex flex-row h-20 w-full items-center pl-16 rounded-full justify-between ${bgColor}`}>
                <p className={`font-sans text-2xl md:text-3xl ${textColor} font-semibold`}>{title}</p>
                {!open && <FaPlus className={`${iconColor} mr-10`}/>}
                {open && <GrSubtract className={`${iconColor} mr-10`}/>}
            </div>
            {open &&
                <div className={`mt-1 pl-16 pr-10 py-8 rounded-[2rem] ${bgColor}`}>
                    <p className={`text-xl ${textColor} text-justify`}>
                        {description}
                    </p>
                </div>
            }
        </div>
    );
}

export default InfoAccordion

