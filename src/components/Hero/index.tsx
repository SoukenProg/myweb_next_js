import Image from "next/image";
import styles from "./index.module.css"

type HeroProps = {
    imagePath: string
    title: string
}

export const Hero =  (HeroProps: HeroProps) => {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.title}>{HeroProps.title}</h1>
            </div>
            <Image className={styles.bgimg} src={HeroProps.imagePath} alt={""} width={4000} height={1200}/>
        </div>
            );
            }

export default Hero;