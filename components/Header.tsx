import AccountGroup from "@/components/AccountGroup";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center container mx-auto py-6 gap-4">
                <div className="flex gap-8 align-center">
                    <Logo />
                    <Menu />
                </div>
                <div className="flex gap-4 align-center">
                    <Search />
                    <AccountGroup />
                </div>
            </header>
        </div>
    );
}

export default Header;