import { StudentOnYear } from "./student-on-year";
import { StudentServiceStaff } from "./student-service-staff";

export interface StudentAffairsOffice {
    id? : number;
	staff? : StudentServiceStaff[];
    studentsOnYear? : StudentOnYear[];
	active? : boolean;
}
