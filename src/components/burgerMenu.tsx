'use client'
import { useState } from 'react';
import { slide as Menu, State } from 'react-burger-menu'
import Link from "next/link";

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '32px',
        height: '26px',
        right: '20px',
        top: '5px',
    },
    bmBurgerBars: {
        background: 'purple'
    },
    bmCross: {
        background: 'white'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: "0",
    },
    bmMenu: {
        background: 'dimgray',
        padding: '2.5em 1.5em 0',
    },
    bmItemList: {
        color: 'white',
    },
}
export default function BurgerMenu() {
    // メニュー画面の開閉状態を管理する「isMenuOpen」を設定
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // メニューを閉じるための関数を設定
    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    // メニュー画面の開閉状態を確認するための関数を設定
    const handleStateChange = (state: State) => {
        setIsMenuOpen(state.isOpen)
    }

    return (
        <div id="outer-container">
            <Menu
                isOpen={isMenuOpen}
                onStateChange={handleStateChange}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
                right={true}
                styles={styles}
            >
                <main id="page-wrap">
                    <ul className="flex flex-col">
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
            </Menu>
        </div>
    )
}