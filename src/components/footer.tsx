import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const navs = [
    {
        name: "X",
        href: "https://twitter.com/souken521",
        icon: FaXTwitter,
    },
    {
        name: "GitHub",
        href: "https://github.com/SoukenProg",
        icon: BsGithub,
    },
];
const Footer = () => {
    return(
        <footer className="bg-gray-400 dark:bg-gray-900">
            <div  className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-r md:justify-end lg:px-8 gap-10">
                {navs.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                ))}
            </div>
        </footer>
    )
}

export default Footer;