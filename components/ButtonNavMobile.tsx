"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { GiAmpleDress } from "react-icons/gi";
import React, { useState } from "react";

const ButtonNavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="md:hidden" onClick={toggleMenu}>
                <button className="pl-5 py-8 md:hidden"><AiOutlineMenu size={24} /></button>
            </div>
            <div className="fixed top-[88px] z-50 bg-white w-full left-0 md:hidden md:top-0 md:container md:mx-auto">
                <ul className={`py-3 flex flex-col absolute w-[60vw] h-[100vh] bg-white items-start mt-4 md:flex-row gap-4 md:justify-between md:items-start ${menuOpen ? '' : 'hidden'}`} onClick={toggleMenu}>
                <li className="hover:text-primary hover:font-bold"><a href="#solucoes" className="flex md:justify-start items-center justify-center gap-2 text-base pl-4">Nossas soluções</a></li>
                <li className="hover:text-primary hover:font-bold"><a href="https://jussi.com.br/" className="flex md:justify-start items-center justify-center gap-2 text-base pl-4">Conheça a Jüssi</a></li>
                </ul>
            </div>
        </>
    );
}

export default ButtonNavMobile;