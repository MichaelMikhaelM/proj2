import { User } from "./user";

export interface Picture{
    pictureId: number;
    pictureLink: string;
    profilePicture: boolean;
    user: User;
}