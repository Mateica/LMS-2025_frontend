import { Announcement } from "./announcement";
import { Forum } from "./forum";
import { ForumRole } from "./forum-role";
import { RegisteredUser } from "./registered-user";
import { Role } from "./role";
import { Topic } from "./topic";

export interface ForumUser {
    id : number;
    registeredUser : RegisteredUser;
    topic? : Topic;
    announcement? : Announcement;
	forum : Forum;
	role : ForumRole[];
    active : boolean;
}
