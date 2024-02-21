import React from "react";
import styles from "./postUser.module.css";
import { IUser } from "@/types/types";
import { getUser } from "@/lib/data";
import Image from "next/image";

// async function getUser(userId: string | number) {
//     const res = await fetch(
//         "https://jsonplaceholder.typicode.com/users/" + userId,
//         { cache: "no-store" }
//     );

//     if (!res.ok) {
//         throw new Error("Something went wrong!");
//     }

//     return res.json();
// }

interface PostUserProps {
    userId: number;
}

const PostUser = async ({ userId }: PostUserProps) => {
    const user: IUser = await getUser(userId);

    return (
        <>
            <div className={styles.profileImg}>
                <Image
                    src={user.img || "/noavatar.png"}
                    alt="random pic"
                    fill
                />
            </div>
            <div className={styles.box}>
                <small>Author</small>
                <p>{user.username}</p>
            </div>
        </>
    );
};

export default PostUser;
