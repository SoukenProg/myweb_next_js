import styles from "@/app/works.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import Button from "@/stories/Button/button";
import {workDescription} from "@/app/libs/microcms_works";
import Hero from "@/components/Hero";
import Date from "@/components/Date";
import Category from "@/components/Category";

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

export default function Works() {
    const slices = works.workList.slice(0,2);
    return (
        (<main className="flex min-h-screen flex-col items-center justify-between p-0">
            <Hero imagePath={"/works_BG.png"} title={"Souken521.works"} />
            <div className={styles.works}>
                <h2 className={styles.worksTitle}>WORKS</h2>
                <ul>
                    {slices.map(( workElms) => (
                        <li key={workElms.id} className={styles.worksList}>
                              <Link href={`/news/${workElms.id}`} className={styles.link} passHref>
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
                              </Link>
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
