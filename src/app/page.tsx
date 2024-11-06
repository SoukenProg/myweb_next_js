import Button from "@/stories/Button/button";
import Image from "next/legacy/image"
import styles from "./page.module.css"
import Hero from "../components/Hero"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

        <Hero imagePath={"/index_BG.png"} title={"Souken521"} />
      <div className="italic max-w-5xl w-full items-center justify-between font-mono text-m lg:flex">
        Coming Soon...
      </div>
    </main>
  );
}
