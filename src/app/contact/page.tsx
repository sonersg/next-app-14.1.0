// "use client";

import { Metadata } from "next";
import styles from "./contact.module.css";
import Image from "next/image";

export const metadata: Metadata = {
    title: "NextJS 14 ContactPage",
    description: "ContactPage Description",
};

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="contact" fill />
            </div>
            <form action="" className={styles.formContainer}>
                <input type="text" placeholder="Name and surname" />
                <input type="email" placeholder="Email" />
                <input type="phone" placeholder="Phone number (optional)" />
                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Message"
                ></textarea>
                <button>Send</button>
            </form>
        </div>
    );
};

export default ContactPage;
