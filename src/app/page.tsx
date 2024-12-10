import Button from "@/stories/Button/button";
import Image from "next/image"
import styles from "./page.module.css"
import Hero from "../components/Hero"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

        <Hero imagePath={"/index_BG.png"} title={"Souken521"} />
      <div className="max-w-5xl w-full items-center justify-between font-mono text-m lg:flex">
        System D.B.R.主催「Souken521」のホームページです。<br/>
          まだまだ準備中...
      </div>
    </main>
  );
}
