"use client";
import SliderProducts from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ShelfProduct = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container mt-14 mb-20 md:mx-auto" id="solucoes">
            <h2 className="text-3xl font-bold not-italic text-start ml-14 mb-3 before:content-['//'] before:text-primary before:text-4xl before:font-bold before:uppercase"> Nossas Soluções </h2>
            <SliderProducts {...settings}>

                <div>
                    <div className="flex flex-col px-4 max-h-[156px] mb-4">
                        <Image className="mx-auto rounded-sm" src="./site-brastemp.png" alt="Loja Brastemp" width={220} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-4 justify-start">
                        <p className="text-black text-base font-medium">Loja Brastemp</p>
                        <p className="text-pink-700 text-xs">Descrição do produto #1</p>
                        <div className="flex flex-col justify-start">
                            <p className="text-black text-xs">• Feature 1</p>
                            <p className="text-black text-xs">• Feature 2</p>
                            <p className="text-black text-xs">• Feature 3</p>
                        </div>
                        <button className="bg-primary hover:bg-primary/80 text-black w-full h-12 rounded-lg py-3 px-16 text-base font-medium">Ver Soluções</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4 max-h-[156px] mb-4">
                        <Image className="mx-auto rounded-sm" src="./site-compracerta.png" alt="Loja Compra Certa" width={220} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-4 justify-start">
                        <p className="text-black text-base font-medium">Loja Compra Certa</p>
                        <p className="text-pink-700 text-xs">Descrição do produto #2</p>
                        <div className="flex flex-col justify-start">
                            <p className="text-black text-xs">• Feature 1</p>
                            <p className="text-black text-xs">• Feature 2</p>
                            <p className="text-black text-xs">• Feature 3</p>
                        </div>
                        <button className="bg-primary hover:bg-primary/80 text-black w-full h-12 rounded-lg py-3 px-16 text-base font-medium">Ver Soluções</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4 max-h-[156px] mb-4">
                        <Image className="mx-auto rounded-sm" src="./site-consul.png" alt="Loja Consul" width={220} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-4 justify-start">
                        <p className="text-black text-base font-medium">Loja Consul</p>
                        <p className="text-pink-700 text-xs">Descrição do produto #3</p>
                        <div className="flex flex-col justify-start">
                            <p className="text-black text-xs">• Feature 1</p>
                            <p className="text-black text-xs">• Feature 2</p>
                            <p className="text-black text-xs">• Feature 3</p>
                        </div>
                        <button className="bg-primary hover:bg-primary/80 text-black w-full h-12 rounded-lg py-3 px-16 text-base font-medium">Ver Soluções</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4 max-h-[156px] mb-4">
                        <Image className="mx-auto rounded-sm" src="./site-thebar.png" alt="Loja The Bar" width={220} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-4 justify-start">
                        <p className="text-black text-base font-medium">Loja The Bar</p>
                        <p className="text-pink-700 text-xs">Descrição do produto #4</p>
                        <div className="flex flex-col justify-start">
                            <p className="text-black text-xs">• Feature 1</p>
                            <p className="text-black text-xs">• Feature 2</p>
                            <p className="text-black text-xs">• Feature 3</p>
                        </div>
                        <button className="bg-primary hover:bg-primary/80 text-black w-full h-12 rounded-lg py-3 px-16 text-base font-medium">Ver Soluções</button>
                    </div>
                </div>



            </SliderProducts>
        </div>
    );
}
export default ShelfProduct