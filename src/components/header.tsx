import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return(
        <header>
            <div className="flex lg:flex-1  ">
                <Link href="/"　className="text-2xl font-logo">
                    Souken521
                </Link>
            </div>
        </header>
    )
}

export  default Header;