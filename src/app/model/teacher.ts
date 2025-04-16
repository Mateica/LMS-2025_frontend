import { Title } from "@angular/platform-browser";
import { RegisteredUser } from "./registered-user";
import { ScientificField } from "./scientific-field";
import { TeachingMaterial } from "./teaching-material";

export interface Teacher {
    id : number;
	user : RegisteredUser;
	firstName : string;
    lastName : string;
	umcn : string;
	title : Title;
	scientificField : ScientificField; // Jedan nastavnik moze imati samo jedno zvanjeu jednoj oblasti, ali moze biti biran u vise oblasti
	teachingMaterial : TeachingMaterial;
	active : boolean;
}
