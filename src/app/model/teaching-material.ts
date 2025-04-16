import { Teacher } from "./teacher";

export interface TeachingMaterial {
	id : number;
	name : string;
	authors : Teacher[];
	yearOfPublication : Date;
    file : File;
	active : boolean;
}
