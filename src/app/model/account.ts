import { RegisteredUser } from "./registered-user";

export interface Account {
    id : number;
    username : string;
	password : string;
	email : string;
    registeredUser : RegisteredUser;
	active : boolean;
}
