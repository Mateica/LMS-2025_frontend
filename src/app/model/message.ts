import { RegisteredUser } from "./registered-user";

export interface Message {
    id : number;
    timePublished : Date;
    sender : RegisteredUser;
	receiver : RegisteredUser;
	attachments? : File[];
    active : boolean;

}
