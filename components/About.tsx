"use client";
import React, { useState, useEffect } from "react";

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container px-8 py-10 flex flex-col md:flex-row mx-auto justify-center gap-24 md:h-[648px] items-center">
            <div className="flex flex-col gap-4 max-w-[241px]">
                <h2 className="text-black text-4xl font-bold uppercase">Olá, somos a Jüssi</h2>
                <p className="text-base font-medium text-black">A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                <a href="https://jussi.com.br/" target="_blank">
                    <button className="bg-transparent hover:bg-primary/80 text-black w-[162px] h-12 rounded-lg py-3 text-base font-medium border border-black">Conheça a Jüssi</button>
                </a>
            </div>
            <div className="w-full max-w-[676px] h-[520px] bg-Job-jussi md:Job-jussi bg-cover">

            </div>
        </div>
    );
}

export default About;