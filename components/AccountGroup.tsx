import { PiShoppingCartSimpleThin } from "react-icons/pi";


const AccountGroup: React.FC = () => {

    return (
        <div className="flex gap-6">
            <button className="whitespace-nowrap md:px-4 px-0 rounded-lg border border-transparent flex items-center gap-2">
            <span className="text-base font-medium text-black">Login</span>
            </button>
            <button className="pl-0 pr-4 md:px-4 rounded-lg border border-transparent flex items-center gap-2">
                <PiShoppingCartSimpleThin size={24} />  
            </button>
        </div>
    );
}

export default AccountGroup;