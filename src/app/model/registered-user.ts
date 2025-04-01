import { ForumUser } from "./forum-user"

export interface RegisteredUser {
    id : number;
    username : string;
    password : string;
    email : string;
    forumUsers : ForumUser[];
    active : boolean;
}
