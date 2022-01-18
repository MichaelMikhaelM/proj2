import { Picture } from "./picture";
import { Post } from "./post";

export interface User{
    userId: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    posts: Post[];
    //pictures: Picture[];
    picture: string;
}