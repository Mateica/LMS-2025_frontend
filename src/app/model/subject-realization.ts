import { Subject } from "./subject"
import { Evaluation } from "./evaluation"
import { TeacherOnRealization } from "./teacher-on-realization"
import { Announcement } from "./announcement";

export interface SubjectRealization {
    id : number;
    evaluations : Evaluation[];
    teachersOnRealization : TeacherOnRealization[];
    announcements : Announcement[];
    subject : Subject;
    active : boolean;
}
