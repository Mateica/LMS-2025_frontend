import { Teacher } from "./teacher"

export interface ScientificField {
    id : number;
    name : string;
    teacher : Teacher;
    active : boolean;
}
