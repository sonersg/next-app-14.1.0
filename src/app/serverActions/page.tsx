import { addPost, deletePost } from "@/lib/action";
import Link from "next/link";
import React from "react";

function page() {
    return (
        <div>
            <form action={addPost}>
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="desc" placeholder="description" />
                <input type="text" name="slug" placeholder="slug" />
                <input type="text" name="userId" placeholder="userId" />
                <input type="text" name="img" placeholder="img url" />
                <button>Add</button>
            </form>
            <form action={deletePost}>
                <input type="text" name="postId" placeholder="postId" />
                <button>Delete</button>
            </form>
            <Link href="/">Go Home, it is running late.</Link>
        </div>
    );
}

export default page;
