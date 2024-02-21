import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";
import React from "react";
import styles from "./adminPosts.module.css";
import Image from "next/image";

async function AdminPosts() {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            {posts.map(post => (
                <div className={styles.post} key={post.id}>
                    <div className={styles.detail}>
                        <Image
                            src={post.img || "/noavatar.png"}
                            alt="post image"
                            width={50}
                            height={50}
                        />
                        <span>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="postId" value={post.id} />
                        <button>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default AdminPosts;
