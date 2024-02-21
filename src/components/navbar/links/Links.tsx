"use client";

import React, { useState } from "react";
import styles from "../navbar.module.css";
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

interface LinksProps {
    session: Session | null;
}

function Links({ session }: LinksProps) {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    const isAdmin = true;

    return (
        <>
            <nav className={styles.nav}>
                <Link
                    href="/"
                    className={pathName === "/" ? styles.active : ""}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={pathName === "/about" ? styles.active : ""}
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className={pathName === "/contact" ? styles.active : ""}
                >
                    Contact
                </Link>
                <Link
                    href="/blog"
                    className={pathName === "/blog" ? styles.active : ""}
                >
                    Blog
                </Link>

                {session?.user ? (
                    <>
                        {session.user && (
                            <Link
                                href="/admin"
                                className={
                                    pathName === "/admin" ? styles.active : ""
                                }
                            >
                                Admin
                            </Link>
                        )}
                        <form action={handleLogout}>
                            <button>Logout</button>
                        </form>
                    </>
                ) : (
                    <Link
                        href="/login"
                        className={pathName === "/login" ? styles.active : ""}
                    >
                        Login
                    </Link>
                )}
            </nav>

            <button
                className={styles.mobileMenuBtn}
                onClick={() => setOpen(prev => !prev)}
            >
                ✨
            </button>

            {open && (
                <nav className={styles.mobileMenu}>
                    <Link
                        href="/"
                        className={pathName === "/" ? styles.active : ""}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={pathName === "/about" ? styles.active : ""}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={pathName === "/contact" ? styles.active : ""}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/blog"
                        className={pathName === "/blog" ? styles.active : ""}
                    >
                        Blog
                    </Link>

                    {session ? (
                        <>
                            {isAdmin && (
                                <Link
                                    href="/admin"
                                    className={
                                        pathName === "/admin"
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    Admin
                                </Link>
                            )}
                            <button>Logout</button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className={
                                pathName === "/login" ? styles.active : ""
                            }
                        >
                            Login
                        </Link>
                    )}
                </nav>
            )}
        </>
    );
}

export default Links;
