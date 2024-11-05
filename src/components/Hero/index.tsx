import Image from "next/image";
import styles from "./index.module.css";

type HeroProps = {
    imagePath: string;
    title: string;
};

export const Hero = ({ imagePath, title }: HeroProps) => {
    return (
        <div className={styles.heroContainer}>
            <Image
                className={styles.bgimg}
                src={imagePath}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
            />
            <div>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    );
};

export default Hero;