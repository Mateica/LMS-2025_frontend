import { Student } from "./student"
import { YearOfStudy } from "./year-of-study"

export interface StudentOnYear {
    id : number;
    dateOfApplication : Date;
    student : Student;
    yearOfStudy : YearOfStudy;
    active : boolean;

}
