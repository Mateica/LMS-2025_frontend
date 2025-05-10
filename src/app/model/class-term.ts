
import { Outcome } from "./outcome"
import { SubjectRealization } from "./subject-realization"
import { TeachingType } from "./teaching-type"

export interface ClassTerm {
    id : number;
	startTime : Date;
    endTime : Date;
    outcome : Outcome;
	teachingType : TeachingType;
    subjectRealization : SubjectRealization;
    active : boolean;
}
