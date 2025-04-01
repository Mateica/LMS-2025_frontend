export interface TeachingMaterial {
	id : number;
	name : string;
	authors : String[]; // Da li umesto stringova mogu stajati nastavnici?
	yearOfPublication : Date;
    file : File;
	active : boolean;
}
