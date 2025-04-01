import { Subject } from "./subject"
import { Evaluation } from "./evaluation"
import { TeacherOnRealization } from "./teacher-on-realization"

export interface SubjectRealization {
    id : number;
    evaluation : Evaluation;
    teacherOnRealization : TeacherOnRealization;
    subject : Subject;
    active : boolean;
}
