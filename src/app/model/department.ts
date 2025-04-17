import { Faculty } from "./faculty";
import { StudyProgramme } from "./study-programme";
import { Teacher } from "./teacher";

export interface Department {
    id : number;
	name : string;
    description : string;
	faculty : Faculty;
	staff : Teacher[];
    chief : Teacher;
	studyProgrammes : StudyProgramme[];
}
