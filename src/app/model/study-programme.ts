import { Department } from "./department";
import { Faculty } from "./faculty";
import { Teacher } from "./teacher";
import { YearOfStudy } from "./year-of-study";

export interface StudyProgramme {
    id : number;
    name : string;
    faculty : Faculty;
	yearOfStudy : YearOfStudy;
	teacher : Teacher;
    department : Department;
    active : boolean;
}
