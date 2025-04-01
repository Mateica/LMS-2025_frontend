import { Subject } from "./subject"

export interface YearOfStudy {
    id : number;
    yearOfStudy : Date;
    subjects : Subject[];
    active : boolean;
}
