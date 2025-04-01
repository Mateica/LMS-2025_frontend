import { ForumUser } from "./forum-user"
import { Topic } from "./topic"

export interface Forum {
    id : number;
    visible : boolean;
    topics : Topic[];
    forumUsers : ForumUser[];
    active : boolean;
}
