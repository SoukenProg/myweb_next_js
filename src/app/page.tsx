import Button from "@/stories/Button/button";
import Image from "next/image"
import styles from "./page.module.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={styles.top}>
            <h1 className={styles.title}>Souken521</h1>
        </div>
        <Image className={styles.bgimg} src="/index_BG.png" alt={""} width={4000} height={1200} />
      <div className="italic max-w-5xl w-full items-center justify-between font-mono text-m lg:flex">
        Coming Soon...
      </div>
    </main>
  );
}
