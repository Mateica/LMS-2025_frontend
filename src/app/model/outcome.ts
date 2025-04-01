import { Subject } from "./subject";
import { EducationGoal } from "./education-goal";
import { TeachingMaterial } from "./teaching-material";

export interface Outcome {
    id : number;
    description : string;
	educationGoal? : EducationGoal;
	teachingMaterial : TeachingMaterial;
    subject : Subject;
    active : boolean;
}
