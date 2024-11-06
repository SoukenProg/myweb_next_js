// 参考:https://tomoyuki65.com/how-to-develop-responsive-design-screens-with-nextjs13/
import Image from "next/legacy/image";
import Link from "next/link";
import BurgerMenu from "@/components/burgerMenu/burgerMenu";
export const Header = () => {
    return (
        // <header className="flex items-center m-3">
        //     <div className="flex md:flex-1 mr-auto items-center gap-3">
        //         <Link href="/" className="text-5xl">
        //             Souken521
        //         </Link>
        //     </div>
        //     <div className="flex mx-4 md:flex-1 md:gap-x-12 justify-end">
        //         <Link href="/" className="font-semibold">Home</Link>
        //         <Link href="/" className="font-semibold">About</Link>
        //         <Link href="/" className="font-semibold">Projects</Link>
        //         <Link href="/" className="font-semibold">Blog</Link>
        //     </div>
        // </header>

        (<header className="w-full bg-white sticky top-0 py-1 dark:bg-black dark:text-white">
            <div className="hidden md:flex justify-between min-w-3xl items-center mx-3">
                <div className="flex md:flex-1 mr-auto items-center gap-3">
                    <Link href="/" className="text-5xl">
                        Souken521
                    </Link>
                </div>
                <div className="flex mx-4 md:flex-1 md:gap-x-12 justify-end">
                    <Link href="/" className="font-semibold">Home</Link>
                    <Link href="/About" className="font-semibold">About</Link>
                    <Link href="/Works" className="font-semibold">Works</Link>
                    <Link href="/Blog" className="font-semibold">Blog</Link>
                    <Link href="/Contact" className="font-semibold">Contact</Link>
                </div>
            </div>
            <div className="md:hidden flex  bg-white dark:bg-black justify-between max-w-3xl items-center mx-3">
                <div>
                    <Link href="/" className="text-4xl">
                        Souken521
                    </Link>
                </div>
                <div className="text-xl font-bold　items-center">
                    <BurgerMenu />
                </div>
            </div>
        </header>)
    );
}

export default Header;