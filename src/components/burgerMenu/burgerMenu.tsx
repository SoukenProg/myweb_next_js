'use client'
import { useState } from 'react';
import Link from "next/link";
import styles from './burgerMenu.module.css';
import cx from 'classnames';
import Works from '@/app/Works/page'
import Blogs from '@/app/Blog/page'
import useMenu  from "@/context/MenuContext";
import {useEffect, useRef} from "react";


export default function BurgerMenu() {
    const { isMenuOpen, setIsMenuOpen } = useMenu();

    const menuFunction = () => {
        console.log("menuFunction called");
        setIsMenuOpen(!isMenuOpen);

    }
    useEffect(() => {
        console.log("Header: isMenuOpen changed to", isMenuOpen);
    }, [isMenuOpen]);

    return (
        <div id="outer-container" className={styles.outer}>
            <main className={cx(styles.nav, isMenuOpen && styles.open)} id="page-wrap">
                <ul className={styles.navList}>
                    <div className={styles.top} onClick={menuFunction}>
                        <button>Close</button>
                    </div>
                    <li className={styles.navItem}>
                        <Link href="/" className="font-semibold">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/About" className="font-semibold">About</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/Works" className="font-semibold">Works</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/Blog" className="font-semibold">Blog</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/Contact" className="font-semibold">Contact</Link>
                    </li>
                </ul>
            </main>
            <div className={styles.openbutton}>
                <button onClick={menuFunction}>Open</button>
            </div>
        </div>
    )
}