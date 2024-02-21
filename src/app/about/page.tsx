import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NextJS 14 AboutPage",
    description: "AboutPage Description",
};

const AboutPage = () => {
    return (
        <main className={styles.container}>
            <div className={styles.textContainer}>
                <h2>About Agency</h2>
                <h1 className={styles.title}>
                    We have digital ideas that are bigger, bolder, braver and
                    better.
                </h1>
                <p className={styles.description}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, consectetur sed, odit pariatur possimus voluptatem
                    nemo recusandae corporis animi, aliquam provident tempore
                    maxime laudantium magni ad eveniet nihil vel reprehenderit.
                </p>
                <div className={styles.boxContainer}>
                    <div className="box">
                        <h2>10 K+</h2>
                        <p>Years of experience</p>
                    </div>
                    <div className="box">
                        <h2>10 K+</h2>
                        <p>Years of experience</p>
                    </div>
                    <div className="box">
                        <h2>10 K+</h2>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/13330770/pexels-photo-13330770.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="random pic"
                    fill
                />
            </div>
        </main>
    );
};

export default AboutPage;
