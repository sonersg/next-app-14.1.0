"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState: any, formData: any) => {
    const title = formData.get("title");
    const desc = formData.get("desc");
    const slug = formData.get("slug");
    const userId = formData.get("userId");
    const img = formData.get("img");

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img,
        });

        await newPost.save();
        console.log("New Post Saved to DB");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "New Post NOT Saved to DB" };
    }
};

export const addUser = async (previousState: any, formData: any) => {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const img = formData.get("img");

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) return { error: "User already exists." };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("New User Saved to DB");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "New User NOT Saved to DB" };
    }
};

export const deletePost = async (formData: any) => {
    const postId = formData.get("postId");

    try {
        connectToDb();

        await Post.findByIdAndDelete(postId);
        console.log("Deleted from DB");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "New Post NOT Saved to DB" };
    }
};

export const deleteUser = async (formData: any) => {
    const id = formData.get("userId");

    try {
        connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("Deleted from DB");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "New Post NOT Saved to DB" };
    }
};

export async function handleGithubLogin() {
    await signIn("github");
}

export async function handleLogout() {
    await signOut();
}

export async function register(previousState: any, formData: any) {
    const { username, email, password, repeatPassword, img } =
        Object.fromEntries(formData);

    if (password !== repeatPassword)
        return { error: "Passwords do not match!" };

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) return { error: "User already exists." };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("New user is saved to db.");

        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "New user NOT Saved to DB" };
    }
}

export async function login(previousState: any, formData: any) {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
        return { success: true };
    } catch (error: any) {
        console.log(error);

        if (error.message.includes("CredentialsSignin"))
            return { error: "Invalid username or password!" };
        throw error;
    }
}
