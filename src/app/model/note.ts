import { Examination } from "./examination";

export interface Note {
    id : number;
    content : string;
	examination : Examination;
	active : boolean;
}
