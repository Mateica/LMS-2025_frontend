import { Title } from "@angular/platform-browser";
import { RegisteredUser } from "./registered-user";
import { ScientificField } from "./scientific-field";
import { TeachingMaterial } from "./teaching-material";
import { Department } from "./department";

export interface Teacher {
	id? : number;
	user : RegisteredUser;
	firstName : string;
	lastName : string;
	umcn : string;
	biography : string;
	titles? : Title[];
	teachingMaterial? : TeachingMaterial;
	department : Department;
	active : boolean;
}
