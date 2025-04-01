import { Announcement } from "./announcement"
import { Message } from "./message"

export interface File {
    id : number;
    url : string;
    description : string;
    message? : Message;
    announcement? : Announcement;
    active : boolean;
}
