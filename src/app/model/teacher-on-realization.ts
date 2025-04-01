import { TeachingType } from "./teaching-type";
import { SubjectRealization } from "./subject-realization";
import { Teacher } from "./teacher";

export interface TeacherOnRealization {
    id : number;
	numberOfClasses : number;
	teacher : Teacher;
	subjectRealization : SubjectRealization;
	notification : Notification;
	teachingType : TeachingType;
	active : boolean;
}
