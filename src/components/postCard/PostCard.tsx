import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
import IPost from "@/types/types";

interface IPostCardProps {
    post: IPost;
}

function PostCard({ post }: IPostCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && (
                    <div className={styles.imgContainer}>
                        <Image src={post.img} alt="blog image" fill />
                    </div>
                )}
                <span>{post.createdAt.toString().slice(0, 16)}</span>
            </div>
            <div className={styles.bottom}>
                <h3>{post.title}</h3>
                <small>{post.desc}</small>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
            </div>
        </div>
    );
}

export default PostCard;
