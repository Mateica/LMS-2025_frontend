import { Evaluation } from "./evaluation";
import { Teacher } from "./teacher";

export interface EvaluationGrade {
    id?: number;
    evaluation? : Evaluation;
    teacher? : Teacher;
    dateTimeEvaluated : Date;
    mark : number;
    active? : boolean;
}
