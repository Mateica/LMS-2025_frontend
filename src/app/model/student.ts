import { Address } from "./address"
import { Faculty } from "./faculty";
import { RegisteredUser } from "./registered-user"
import { StudentOnYear } from "./student-on-year"
import { SubjectAttendance } from "./subject-attendance"

export interface Student {
    id : number;
    user : RegisteredUser;
    firstName : string;
    lastName : string;
    umcn : string;
    address : Address;
    studentsOnYear : StudentOnYear[];
    subjectAttendances : SubjectAttendance[];
    faculty : Faculty;
    active : boolean;

}
