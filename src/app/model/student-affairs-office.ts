import { Faculty } from "./faculty";
import { StudentOnYear } from "./student-on-year";
import { StudentServiceStaff } from "./student-service-staff";

export interface StudentAffairsOffice {
    id? : number;
	staff? : StudentServiceStaff[];
    faculty? : Faculty;
	active? : boolean;
}
