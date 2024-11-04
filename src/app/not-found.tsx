import styles from "@/app/not-found.module.css";
import Image from "next/image";

export const NotFound =  () => {

    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.title}>404 NOT FOUND</h1>
            </div>
            <Image className={styles.bgimg} src="/404_BG.png" alt={""} width={4000} height={1200}/>
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