"use client";

import { login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

function LoginForm() {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/");
    }, [state?.success, router]);

    return (
        <form action={formAction}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button>Login with Credentials</button>

            <div>
                <p>{state?.error}</p>
                <Link href="/register">
                    <span>Don&apos;t have an account? Register</span>
                </Link>
            </div>
        </form>
    );
}

export default LoginForm;
