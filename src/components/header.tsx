import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "@/components/burgerMenu";
export const Header = () => {
    return (
        // <header className="flex items-center m-3">
        //     <div className="flex lg:flex-1 mr-auto items-center gap-3">
        //         <Link href="/" className="text-5xl">
        //             Souken521
        //         </Link>
        //     </div>
        //     <div className="flex mx-4 lg:flex-1 lg:gap-x-12 justify-end">
        //         <Link href="/" className="font-semibold">Home</Link>
        //         <Link href="/" className="font-semibold">About</Link>
        //         <Link href="/" className="font-semibold">Projects</Link>
        //         <Link href="/" className="font-semibold">Blog</Link>
        //     </div>
        // </header>

    <header className="w-full sticky top-0">
            <div className="hidden md:flex justify-between min-w-3xl items-center m-3">
                <div className="flex lg:flex-1 mr-auto items-center gap-3">
                    <Link href="/" className="text-5xl">
                        Souken521
                    </Link>
                </div>
                <div className="flex mx-4 lg:flex-1 lg:gap-x-12 justify-end">
                    <Link href="/" className="font-semibold">Home</Link>
                    <Link href="/" className="font-semibold">About</Link>
                    <Link href="/" className="font-semibold">Projects</Link>
                    <Link href="/" className="font-semibold">Blog</Link>
                </div>
            </div>
            <div className="md:hidden flex justify-between max-w-3xl">
                <div className="text-xl font-bold">
                    <Link href="/" className="text-5xl">
                        Souken521
                    </Link>
                </div>
                <div className="text-xl font-bold">
                    <BurgerMenu />
                </div>
            </div>
    </header>
)
}

export default Header;