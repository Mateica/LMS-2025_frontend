import { Address } from "./address";
import { Department } from "./department";
import { Student } from "./student";
import { StudentAffairsOffice } from "./student-affairs-office";
import { StudyProgramme } from "./study-programme";
import { Teacher } from "./teacher";
import { University } from "./university";

export interface Faculty {
    id? : number;
	name : string;
	address : Address;
	headmaster? : Teacher;
	university? : University;
	contactDetails : string;
	description: string;
	departments? : Department;
	studyProgrammes? : StudyProgramme[];
	students? : Student[];
	studentAffairsOffice? : StudentAffairsOffice;
	active? : boolean;
}
