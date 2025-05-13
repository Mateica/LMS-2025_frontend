import { Student } from "./student";
import { SubjectRealization } from "./subject-realization"

export interface SubjectAttendance {
    id : number;
	finalGrade : number;
	subjectRealization : SubjectRealization;
	student : Student;
	active : boolean;
}
