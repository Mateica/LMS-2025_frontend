import { Announcement } from "./announcement"
import { Evaluation } from "./evaluation";
import { Message } from "./message"
import { Student } from "./student";

export interface File {
    id? : number;
	name: string;
	url : string;
	description: string;
	post? : Announcement;
	message? : Message;
	announcement? : Announcement;
	evaluation? : Evaluation;
    student?: Student;
	document : Uint8Array;
    active?: boolean;
}
