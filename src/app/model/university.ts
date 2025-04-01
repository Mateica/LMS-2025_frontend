import { Address } from "./address"
import { Faculty } from "./faculty"
import { Teacher } from "./teacher"

export interface University {
    id : number;
    name : string;
	dateEstablished : Date;
	address : Address;
	rector : Teacher;
	faculties : Faculty[];
	active : boolean;
}
