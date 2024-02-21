import { getUsers } from "@/lib/data";
import React from "react";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

async function AdminUsers() {
    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {users.map(user => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image
                            src={user.img || "/noavatar.png"}
                            alt="user image"
                            width={50}
                            height={50}
                        />
                        <span>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="userId" value={user.id} />
                        <button>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default AdminUsers;
