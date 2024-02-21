"use client";

import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

function RegisterForm() {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form action={formAction}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input
                type="password"
                name="repeatPassword"
                placeholder="repeatPassword"
            />

            <button>Register</button>

            <div>
                <p>{state?.error}</p>
                <Link href="/login">
                    <span>Have an account? Login</span>
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;
