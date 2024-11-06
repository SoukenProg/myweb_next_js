import styles from "@/app/not-found.module.css";
import Image from "next/image";
import Hero from "../components/Hero";

export const NotFound =  () => {

    return (
        <div>
            <Hero imagePath={"/404_BG.png"} title={"404 NOT FOUND"} />
            <dl>
                <dt className={styles.error}>ページが存在しません</dt>
                <dd className={styles.text}>
                    404というエラーです。<br/>
                    お探しのページは別の場所に移動されたか、<br/>
                    削除された可能性があります。<br/>
                    URLを再度ご確認ください。
                </dd>
            </dl>
        </div>
    );
}

export default NotFound;