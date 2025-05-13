import { File } from "./file";
import { ForumUser } from "./forum-user";
import { SubjectRealization } from "./subject-realization";
import { Topic } from "./topic";

export interface Announcement {
    id? : number;
	timePublished : Date;
	content : string;
	subjectRealization : SubjectRealization;
	title : string;
	attachments : File[];
	active : boolean;
}
