import styles from "@/app/works.module.css";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import {works} from "@/app/libs/microcms_gallery";
import Button from "@/stories/Button/button";

const data:{
    work: works[]
} ={
    work: [
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
    const slices = data.work.slice(0,2);
    return (
        <div>
            <Hero imagePath={"/works_BG.png"} title={"Souken521.works"}/>

            <div className={styles.works}>
                <h2 className={styles.worksTitle}>WORKS</h2>

            </div>
            <div>
                <Gallery work={slices}/>
            </div>
            <div>
                <Button className={styles.moreButton} href={'#'}>More</Button>
            </div>
        </div>
    );
}
