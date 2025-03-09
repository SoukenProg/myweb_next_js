'use client';
import styles from "./index.module.css";
import Image from "next/image";
import Category from "@/components/Category";
import Date from "@/components/Date";
import {works} from "@/app/libs/microcms_gallery";
import Link from "next/link";
import useMenu from "@/context/MenuContext";

type Props ={
    work : works[];
}
export default function Gallery({work}: Props) {

    const { isMenuOpen, setIsMenuOpen } = useMenu();
    if(work.length === 0){
        return <p>No Content(s).</p>
    }
    return (
            <div className={`${styles.container} ${isMenuOpen ? styles.disabled : ""}`}>
                <ul>
                    {work.map((workElms) => (
                        <li key={workElms.id} className={`${styles.galleriesList} ${isMenuOpen ? styles.disabled : ""}`}>
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
