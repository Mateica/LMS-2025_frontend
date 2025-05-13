import { Evaluation } from "./evaluation";

export interface EvaluationType {
    id : number;
    name : string;
    evaluations : Evaluation[];
    active : boolean;
}
