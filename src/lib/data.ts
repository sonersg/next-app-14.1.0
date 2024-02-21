import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as nostore } from "next/cache";

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch the posts");
    }
};

export const getPost = async (slug: any) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch the posts");
    }
};

export const getUser = async (id: number | string) => {
    nostore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch the user");
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch the users");
    }
};
