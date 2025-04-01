import { Announcement } from "./announcement";
import { Forum } from "./forum";
import { ForumUser } from "./forum-user";

export interface Topic {
    id : number;
	name : string;
	author? : ForumUser;
    forum : Forum;
    announcements : Announcement[];
    active : boolean;
}
