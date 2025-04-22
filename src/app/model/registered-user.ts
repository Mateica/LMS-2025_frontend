import { Account } from "./account";
import { ForumUser } from "./forum-user"
import { Role } from "./role";

export interface RegisteredUser {
    id? : number;
    username : string;
    password : string;
    email : string;
    forumUsers? : ForumUser[];
    accounts? : Account[];
    roles? : Role[];
    active? : boolean;
}
