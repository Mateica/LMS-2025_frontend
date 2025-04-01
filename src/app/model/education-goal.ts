import { Outcome } from "./outcome"

export interface EducationGoal {
    id : number;
    description : string;
    outcome? : Outcome;
    active : boolean;
}
