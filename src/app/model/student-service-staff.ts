import { RegisteredUser } from "./registered-user";
import { StudentAffairsOffice } from "./student-affairs-office";

export interface StudentServiceStaff {
    id? : number;
    registeredUser : RegisteredUser;
	studentAffairsOffice? : StudentAffairsOffice;
    active? : boolean
}
