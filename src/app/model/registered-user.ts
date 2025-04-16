import { ForumUser } from "./forum-user"
import { Role } from "./role";

export interface RegisteredUser {
    id : number;
    username : string;
    password : string;
    email : string;
    forumUsers : ForumUser[];
    roles : Role[];
    active : boolean;
}
