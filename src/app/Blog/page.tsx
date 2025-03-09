import styles from "@/app/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import Button from "@/stories/Button/button";
import {blogDescription} from "@/app/libs/microcms_blogs";
import Category from "@/components/Category";
import Date from "@/components/Date";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

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
interface MenuProps {
    isMenuOpen: boolean;
}
export default function Blogs({isMenuOpen}: MenuProps) {
    const slices = blogs.blogList.slice(0,2);
    return (
        (
            <>
            <Hero imagePath={"/blog_BG.png"} title={"Souken521.Blog"} />
            <div className={styles.blogs}>
                <h2 className={styles.blogTitle}>ARTICLES</h2>

            </div>
            <div>
                <Gallery work={slices} isOpen={isMenuOpen} />
            </div>
            <div>
                <Button className={styles.moreButton} href={'#'}>More</Button>
            </div>
        </>
       )
    );
}
