import { Evaluation } from "./evaluation";
import { File } from "./file";

export interface EvaluationInstrument {
	id? : number;
	name : string;
	evaluations? : Evaluation[];
	file? : File;
	active? : boolean;
}
