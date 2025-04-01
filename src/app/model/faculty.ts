import { Address } from "./address";
import { StudyProgramme } from "./study-programme";
import { Teacher } from "./teacher";
import { University } from "./university";

export interface Faculty {
    id : number;
	name : string;
	address : Address;
	headmaster : Teacher;
	university : University;
    studyProgrammes : StudyProgramme[];
	active : boolean;
}
