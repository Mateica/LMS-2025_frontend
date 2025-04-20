import { Place } from "./place";

export interface Address {
    id : number;
    street : string;
	houseNumber : number;
    place : Place;
    active? : boolean;
}
