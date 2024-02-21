import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Links from "./links/Links";

const Navbar = async () => {
    const session = await auth();

    return (
        <div className={styles.container}>
            <h1>
                <Link href="/">Soner</Link>
            </h1>

            <Links session={session} />
        </div>
    );
};

export default Navbar;
