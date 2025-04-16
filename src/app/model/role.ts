import { RegisteredUser } from "./registered-user";

export interface Role {
    id : number;
    name : string;
    registeredUser : RegisteredUser ; 
    active : boolean;
}
