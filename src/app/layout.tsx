import type { Metadata } from "next";
import MenuProviderWrapper from "@/components/MenuProviderWrapper/MenuProviderWrapper";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Souken521",
  description: "Souken521s Web Site",
};

type Props = {
    children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
    return (<MenuProviderWrapper>
                <html lang="ja">
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
                </html>
        </MenuProviderWrapper>
    )
}

export default RootLayout
