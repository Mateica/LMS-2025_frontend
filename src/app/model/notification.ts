export interface Notification {
    id : number;
    timePublished : Date;
	content : string;
	title : string;
	attachments? : File[];
	active : boolean;
}
