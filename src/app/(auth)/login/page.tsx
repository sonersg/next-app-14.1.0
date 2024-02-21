import { handleGithubLogin } from "@/lib/action";
import React from "react";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
