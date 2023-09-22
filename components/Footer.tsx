import {AiFillFacebook, AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai"
import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="flex justify-center bg-black h-[80px]">
            <div className="flex items-center w-[80%] justify-between">
                <Image src="/wppcompany.png" width={142} height={27} alt="Logo Jussi" />
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/agencia.jussi/?locale=pt_BR" target="_blank"><AiFillFacebook size={32} color="white"/></a>
                    <a href="https://www.instagram.com/jussi/" target="_blank"><AiOutlineInstagram size={32} color="white"/></a>
                    <a href="https://www.linkedin.com/company/agencia-jussi/mycompany/" target="_blank"><AiFillLinkedin size={32} color="white"/></a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;