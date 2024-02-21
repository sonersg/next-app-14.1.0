import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Weird Thoughts Agency</h1>
                <p className={styles.description}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, consectetur sed, odit pariatur possimus voluptatem
                    nemo recusandae corporis animi, aliquam provident tempore
                    maxime laudantium magni ad eveniet nihil vel reprehenderit.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt="brands" fill />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/hero.gif" alt="bulp animation" fill />
            </div>
        </main>
    );
}
