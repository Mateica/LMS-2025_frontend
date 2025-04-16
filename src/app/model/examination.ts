import { Note } from "./note";
import { StudentOnYear } from "./student-on-year";

export interface Examination {
    id : number;
	numberOfPoints : number;
	notes : Note[];
	studentOnYear : StudentOnYear
	active : boolean;

}
