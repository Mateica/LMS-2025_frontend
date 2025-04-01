import { SubjectRealization } from "./subject-realization"

export interface SubjectAttendance {
    id : number;
	finalGrade : number;
	subjectRealization : SubjectRealization;
	active : boolean;
}
