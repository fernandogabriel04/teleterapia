'use client'

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "../lib/utils";
import { useState } from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveSlide(index);
    };
    return (
        <section id="news" className="max-w-full mx-auto max-h-[37rem] flex flex-row flex-nowrap items-center justify-between">
            {/* Imagem */}
            <div className="hidden lg:block w-full md:w-[25%]">
                <Image src="/Box-News.png" alt="Mãos dadas" width={1000} height={1000} className="object-contain h-auto w-full" />
            </div>

            {/* Conteudo */}
            <div className="w-full md:w-[75%] flex flex-row justify-between">
                {/* Imagens */}
                <div className="hidden xl:flex flex-row gap-4 items-center justify-center max-w-full -ml-[7rem]">
                    {/* Imagem 1 */}
                    <NewsCard image="News-1.png" />
                    {/* Imagem 2 */}
                    <NewsCard image="News-2.jpg" />
                </div>
                {/* noticia */}
                <div className="flex flex-col w-full md:w-auto items-end justify-end gap-4 max-h-[40rem] px-[5rem] py-6 xl:py-0">
                    {/* imagem noticia */}
                    <div className="min-w-[20rem] min-h-[10rem]">
                        <Image src="/News-Header.jpg" alt="imagem da noticia" width={1000} height={1000} className="object-contain h-auto w-auto rounded-[4rem] max-w-[23rem] max-h-[13rem] -mt-[5rem] ml-[23rem] lg:-mt-[10rem]lg:ml-0" />

                    </div>
                    {/* noticia */}
                    <div className="flex flex-col w-full items-start px-8 gap-4 mb-4">
                        <h3 className="text-sm md:text-xl font-bold">04 de Março &apos;25</h3>
                        <h2 className="text-md md:text-4xl font-bold">A terapia é uma excelente ferramenta para combater a ansiedade, afirma estudos.</h2>
                        <p className="text-sm md:text-lg">Depois da pandemia de 2021, com o aumento do home-office, a terapia tem sido uma porta de escape para muitas pessoas na atualidade.</p>
                        <a href="#" target="_blank" className="flex items-center bg-[#72f58b] font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-full text-sm transition duration-300 transform hover:scale-105">
                            Ler mais
                            <FaArrowRight className="ml-2 text-2xl sm:text-3xl font-bold" />
                        </a>
                        {/* Navigation dots */}
                        <div className="flex flex-row justify-center gap-2 mt-8 ml-2">
                            {[0, 1, 2, 3].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={cn(
                                        "w-4 h-4 rounded-full",
                                        activeSlide === index ? "bg-primary-blue border-4 border-primary-green" : "bg-primary-green"
                                    )}
                                    aria-label={`Ir para próxima notícia ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;