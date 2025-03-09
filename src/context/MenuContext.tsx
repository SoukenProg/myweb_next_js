"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export　default function useMenu()  {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
}