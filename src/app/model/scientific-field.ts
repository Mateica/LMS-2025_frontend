import { Title } from "./title";



export interface ScientificField {
    id : number;
    name : string;
    titles? : Title[];
    active : boolean;
}
