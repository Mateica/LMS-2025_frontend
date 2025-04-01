import { RegisteredUser } from "./registered-user"

export interface Administrator {
    id : number;
    user : RegisteredUser;
    active : boolean;
}
