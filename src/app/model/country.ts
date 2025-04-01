import { Place } from "./place"

export interface Country {
    id : number;
    name : string;
    places : Place[];
    active : boolean;
}
