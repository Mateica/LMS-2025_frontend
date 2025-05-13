import { Title } from "@angular/platform-browser";
import { RegisteredUser } from "./registered-user";
import { TeachingMaterial } from "./teaching-material";
import { Department } from "./department";
import { TeacherOnRealization } from "./teacher-on-realization";

export interface Teacher {
	id? : number;
	user? : RegisteredUser;
	firstName : string;
	lastName : string;
	umcn : string;
	biography : string;
	titles? : Title[];
	teachersOnRealization : TeacherOnRealization[];
	teachingMaterial? : TeachingMaterial;
	department? : Department;
	active? : boolean;
}
