import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/stories/Button/button";
import Category from "@/components/Category";
import Date from "@/components/Date";
type workDescription = {
    id: string;
    title: string;
    category: {
        name: string;
    }
    description: string;
    releasedate: string;
}
const works:{
    workList: workDescription[]
} ={
    workList: [
        {
            id:"0",
            title:"テスト0",
            category: {
                name: "テスト",
            },
            description: "テスト0",
            releasedate: "2024-11-01",
        },
        {
            id:"1",
            title:"テスト1",
            category: {
                name: "テスト",
            },
            description: "テスト1",
            releasedate: "2024-11-02",
        },
        {
            id:"2",
            title:"テスト2",
            category: {
                name: "テスト",
            },
            description: "テスト2",
            releasedate: "2024-11-03",
        },
    ],
};
type Props ={
    work : workDescription[];
}
export default function Works({work}: Props) {
    if(work.length === 0){
        return <p>No Work.</p>
    }
    return (
        (<main className="flex min-h-screen flex-col items-center justify-between p-0">
            <div className={styles.top}>
                <h1 className={styles.title}>Souken521.works</h1>
            </div>
            <Image
                className={styles.bgimg}
                src="/works_BG.png"
                alt={""}
                width={4000}
                height={1200}
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <div className={styles.works}>
                <h2 className={styles.worksTitle}>WORKS</h2>
                <ul>
                    {work.map(( workElms) => (
                        <li key={workElms.id} className={styles.worksList}>
                            <div className={styles.link}>
                                <Image
                                    className={styles.image}
                                    src="/noImage.png"
                                    alt="No Image"
                                    width={1600}
                                    height={1200}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                                <dl className={styles.content}>
                                    <dt className={styles.worksItemTitle}>{workElms.title}</dt>
                                    <dd className={styles.meta}>
                                        <Category category={workElms.category} />
                                        <Date date={workElms.releasedate} />
                                    </dd>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                    <Button className={styles.moreButton} href={'#'}>More</Button>
                </div>
            </div>
            <h1>
                (this is Works Page.)
            </h1>
        </main>)
    );
}
