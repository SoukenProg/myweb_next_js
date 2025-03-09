import styles from "./contact.module.css"
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
        <Hero imagePath={"/Contact_BG.png"} title={"Contact to Souken521"}></Hero>
      <div className={styles.text}>
        Coming Soon... <br/>
      </div>

    </>
  );
}
