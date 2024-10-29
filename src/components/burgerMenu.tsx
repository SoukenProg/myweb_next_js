'use client'
import { useState } from 'react';
import Link from "next/link";

export default function BurgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div id="outer-container">
                <main id="page-wrap">
                    <ul className="flex flex-col">
                        {openMenu}
                        <div className={"bg-white"} onClick={() => menuFunction()}>
                            <span></span>
                            <span></span>
                            <p>Close</p>
                        </div>
                        <li className="mb-4">
                            <Link href="/" className="font-semibold">Home</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/About" className="font-semibold">About</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/Works" className="font-semibold">Works</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/Contact" className="font-semibold">Contact</Link>
                        </li>
                    </ul>
                </main>
        </div>
    )
}