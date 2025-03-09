'use client';

import React from "react";
import { MenuProvider } from "@/context/MenuContext";

export default function MenuProviderWrapper({ children }: { children: React.ReactNode }) {
    return <MenuProvider>{children}</MenuProvider>;
}