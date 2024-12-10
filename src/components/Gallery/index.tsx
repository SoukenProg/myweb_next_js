import styles from "./index.module.css";
import Image from "next/image";
import Category from "@/components/Category";
import Date from "@/components/Date";
import {works} from "@/app/libs/microcms_gallery";
import Link from "next/link";

type Props ={
    work : works[];
}
export default function Gallery({work}: Props) {

    if(work.length === 0){
        return <p>No Work.</p>
    }
    return (
            <div className={styles.container}>
                <ul>
                    {work.map((workElms) => (
                        <li key={workElms.id} className={styles.galleriesList}>
                            <Link href={`/news/${workElms.id}`} className={styles.link}>
                                    <Image
                                        className={styles.image}
                                        src="/noImage.png"
                                        alt="No Image"
                                        width={1600}
                                        height={1200}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                    <dl className={styles.content}>
                                        <dt className={styles.galleriesItemTitle}>{workElms.title}</dt>
                                        <dd className={styles.meta}>
                                            <Category category={workElms.category}/>
                                            <Date date={workElms.releasedate}/>
                                        </dd>
                                    </dl>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    );
}
