import { Examination } from "./examination";
import { Student } from "./student"
import { StudentAffairsOffice } from "./student-affairs-office";
import { YearOfStudy } from "./year-of-study"

export interface StudentOnYear {
    id : number;
	dateOfApplication? : Date;
	student? : Student;
	indexNumber : string;
	yearOfStudy : YearOfStudy;
	examinations? : Examination[];
	studentAffairsOffice? : StudentAffairsOffice;
	active? : boolean;
}
