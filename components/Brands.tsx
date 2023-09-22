import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs'

const Brands = () => {
    return (
        <div className="container mx-auto px-4 text-center items-center py-5">
            <div className="flex justify-center align items-center md:hidden">
                <span className="text-base font-medium text-black">Nossas principais lojas VTEX</span>
            </div>
            <div className="inline-flex gap-5 md:gap-12 justify-center align items-center min-h-[35px] mt-3 md:mt-0">
                <div className="hidden md:block">
                    <span className="text-base font-medium text-black">Nossas principais lojas VTEX</span>
                </div>
                <div className="hidden md:block">
                    <span><BsArrowRight size={16} /></span>
                </div>
                <div>
                    <Image src="/logo-brastemp.png" width={160} height={30} alt="Logo Jussi" />
                </div>
                <div>
                    <Image src="/logo-compracerta.png" width={160} height={30} alt="Logo Jussi" />
                </div>
                <div>
                    <Image src="/logo-consul.png" width={160} height={30} alt="Logo Jussi" />
                </div>
                <div>
                    <Image src="/logo-thebar.png" width={160} height={30} alt="Logo Jussi" />
                </div>
            </div>
        </div>
    );
}

export default Brands;