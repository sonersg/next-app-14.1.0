import React from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";

function RegisterPage() {
    return (
        <div className={styles.container}>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;
