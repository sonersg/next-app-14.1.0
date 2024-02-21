import React, { Suspense } from "react";
import styles from "./singlePostPage.module.css";
import Image from "next/image";
import IPost from "@/types/types";
import PostUser from "@/components/postUser/PostUser";
// import { getPost } from "@/lib/data";

async function getPost(slug: string | number) {
    const res = await fetch("http://localhost:3000/api/blog/" + slug);

    if (!res.ok) {
        throw new Error("Something went wrong!");
    }

    return res.json();
}

interface SinglePostPageProps {
    params: any;
}
const SinglePostPage = async ({ params }: SinglePostPageProps) => {
    const { slug } = params;

    const post: IPost = await getPost(slug);

    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="random pic" fill />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1>{post.title}</h1>
                <div className={styles.card}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.box}>
                        <small>Published</small>
                        <p>{post.createdAt.toString().slice(4, 16)}</p>
                    </div>
                </div>
                <p>{post.desc}</p>
            </div>
        </div>
    );
};

export default SinglePostPage;
