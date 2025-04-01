import { Address } from "./address"
import { RegisteredUser } from "./registered-user"
import { StudentOnYear } from "./student-on-year"
import { SubjectAttendance } from "./subject-attendance"

export interface Student {
    id : number;
    user : RegisteredUser;
    firstName : string;
    lastName : string;
    umcn : string;
    indexNumber : string;
    address : Address;
    studentOnYear : StudentOnYear;
    subjectAttendance : SubjectAttendance;
    active : boolean;

}
