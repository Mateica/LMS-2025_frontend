import { Evaluation } from "./evaluation";
import { Note } from "./note";
import { StudentOnYear } from "./student-on-year";

export interface Examination {
    id? : number;
	numberOfPoints : number;
	notes? : Note[];
	evaluations? : Evaluation[];
	studentOnYear? : StudentOnYear;
	active? : boolean;


}
