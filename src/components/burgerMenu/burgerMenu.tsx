'use client'
import { useState } from 'react';
import Link from "next/link";
import styles from './burgerMenu.module.css';
import cx from 'classnames';

export default function BurgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div id="outer-container" className={styles.outer}>
            <main className={cx(styles.nav, openMenu && styles.open)} id="page-wrap">
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