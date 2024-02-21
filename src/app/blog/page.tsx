import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import IPost from "@/types/types";
// import { getPosts } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NextJS 14 BlogPage",
    description: "BlogPage Description",
};

async function getPosts() {
    const res = await fetch("http://localhost:3000/api/blog");

    if (!res.ok) {
        throw new Error("Something went wrong!");
    }

    return res.json();
}

const BlogPage = async () => {
    const posts: IPost[] = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map(post => (
                <div key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
