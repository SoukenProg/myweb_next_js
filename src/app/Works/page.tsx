import styles from "@/app/works.module.css";
import Image from "next/image";

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
export default function Works() {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <div className={styles.top}>
                  <h1 className={styles.title}>Souken521.works</h1>
              </div>
              <Image className={styles.bgimg} src="/works_BG.png" alt={""} width={4000} height={1200}/>
              <div className="italic max-w-5xl w-full items-center justify-between font-mono text-m lg:flex">
                  Coming Soon...
              </div>
          </main>
          <h1>
              (this is Works Page.)
          </h1>
      </main>
  );
}
