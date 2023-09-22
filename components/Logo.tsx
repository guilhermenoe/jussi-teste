import ButtonNavMobile from "@/components/ButtonNavMobile";
import Image from "next/image";

const Logo = () => {

    return (
        <div className="flex justify-center">
            <div>
                <ButtonNavMobile />
            </div>
            <div className="w-full min-w-[110px] self-center ml-3 z-10 h-auto">
                <Image src="./logojussi.png" width={184} height={40} alt="Logo Jussi" />
            </div>
        </div>

    );
}

export default Logo;