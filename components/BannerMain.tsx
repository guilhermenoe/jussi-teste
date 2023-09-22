import Image from "next/image";

const BannerMain = () => {

    return (
        <div className="flex flex-wrap w-full gap-10 justify-center bg-primary py-8 md:h-[560px] md:py-0">
            <div className="flex flex-col items-center justify-center max-w-md gap-5 w-1/2 ">
                <h2 className="text-6xl font-medium text-black uppercase">Criamos lojas que vendem mais.</h2>
                <p className="text-base font-medium text-black uppercase pr-24">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                <a href="#solucoes" className="self-start">
                   <button className="self-start text-base font-medium px-6 py-3 border-2 border-black rounded-lg hover:bg-green-500">Veja nossas soluções</button>
                </a>
            </div>
            <div className="md:flex items-center justify-center w-1/2 relative hidden ">
                    <div className="flex flex-col items-center justify-center w-[209px] h-[271px] bg-white rounded-lg absolute mr-72 mt-36 shadow-2xl gap-9 ">
                        <Image src="/geladeira.png" width={135} height={135} alt="Logo Jussi" />
                        <button className="px-6 py-3 text-red-500 border-2 border-red-500 rounded-full text-base font-medium hover:bg-slate-200">Mais Detalhes</button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[209px] h-[271px] bg-white rounded-lg absolute mt-[-14rem] z-50 shadow-2xl gap-9">
                        <Image src="/batedeira.png" width={135} height={135} alt="Logo Jussi" />
                        <button className="px-6 py-3 text-red-500 border-2 border-red-500 rounded-full text-base font-medium hover:bg-slate-200">Mais Detalhes</button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[209px] h-[271px] bg-white rounded-lg absolute ml-60 mt-52 shadow-2xl gap-9">
                        <Image src="/whisky.png" width={135} height={135} alt="Logo Jussi" />
                        <button className="px-6 py-3 text-red-500 border-2 border-red-500 rounded-full text-base font-medium hover:bg-slate-200">Mais Detalhes</button>
                    </div>
            </div>
        </div>
    );
}

export default BannerMain;