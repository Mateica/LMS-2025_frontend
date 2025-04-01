import { Title } from "@angular/platform-browser";
import { RegisteredUser } from "./registered-user";
import { ScientificField } from "./scientific-field";

export interface Teacher {
    id : number;
	user : RegisteredUser;
	firstName : string;
	lastName : string;
    umcn : string;
    title : Title;
    scientificField : ScientificField;
    active : boolean;
}
