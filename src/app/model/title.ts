import { ScientificField } from "./scientific-field"
import { TitleType } from "./title-type"

export interface Title {
    id : number;
    dateElected : Date;
	dateAbolished : Date;
    scientificField : ScientificField;
	titleType : TitleType;
    active : boolean;
}
