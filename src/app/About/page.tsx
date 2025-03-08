import Hero from "@/components/Hero";
const AboutSouken = () => {
    return (
        <div>
            <Hero imagePath={"/About_BG.png"} title={"ABOUT Souken521"} />
            <div>
                <ul>
                    <li>
                        <p>2000年5月生まれ。</p>
                    </li>
                    <li>
                        <p>音楽ゲームに影響を受け2017年よりCubaseを用いた音楽制作をはじめ、2022年に初めて作品を対外向けに発表する。</p>
                    </li>
                    <li>
                        <p>現在は主にダンスミュージックを中心に制作を行っている。</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default AboutSouken;