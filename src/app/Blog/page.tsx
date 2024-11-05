import styles from "@/app/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import Button from "@/stories/Button/button";
import {blogDescription} from "@/app/libs/microcms_blogs";
import Category from "@/components/Category";
import Date from "@/components/Date";
import Hero from "@/components/Hero";

const blogs:{
    blogList: blogDescription[]
} ={
    blogList: [
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

export default function Blogs() {
    const slices = blogs.blogList.slice(0,2);
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
                <Hero imagePath={"/blog_BG.png"} title={"Souken521.Blog"} />
              <div className={styles.blogs}>
                  <h2 className={styles.blogTitle}>ARTICLES</h2>
                  <ul>
                      {slices.map(( blogElms) => (
                          <li key={blogElms.id} className={styles.blogsList}>
                                <Link href={`/news/${blogElms.id}`} className={styles.link}>
                                    <Image className={styles.image} src="/noImage.png" alt="No Image" width={1600} height={1200}/>
                                    <dl className={styles.content}>
                                        <dt className={styles.blogItemTitle}>{blogElms.title}</dt>
                                            <dd className={styles.meta}>
                                                <Category category={blogElms.category} />
                                                <Date date={blogElms.releasedate} />
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
              (this is Blog Page.)
          </h1>
          </main>
  );
}
