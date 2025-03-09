import Button from "@/stories/Button/button";
import Image from "next/image"
import styles from "./page.module.css"
import Hero from "../components/Hero"
export default function Home() {
  return (
    <>
        <Hero imagePath={"/index_BG.png"} title={"Souken521"} />
      <div className={styles.text}>
        System D.B.R.主催「Souken521」のホームページです。<br/>
          まだまだ準備中...
     </div>
    </>
  );
}
