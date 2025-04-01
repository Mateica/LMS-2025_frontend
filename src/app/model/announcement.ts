import { ForumUser } from "./forum-user";
import { Topic } from "./topic";

export interface Announcement {
    id : number;
    datePublished : Date;
	content : string;
	author? : ForumUser;
	attachments? : File[];
	topic : Topic;
	active : boolean;
}
