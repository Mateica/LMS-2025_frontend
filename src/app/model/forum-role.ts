import { ForumUser } from "./forum-user";

export interface ForumRole {
    id : number;
    name : string;
    forumUser : ForumUser;
	active : boolean;
}
