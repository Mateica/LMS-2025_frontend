import { EvaluationInstrument } from "./evaluation-instrument"
import { EvaluationType } from "./evaluation-type"
import { Examination } from "./examination"
import { Outcome } from "./outcome"

export interface Evaluation {
    id : number;
	startTime : Date;
	endTime : Date;
	numberOfPoints : number;
	outcome : Outcome;
	evaluationType : EvaluationType;
	evaluationInstrument : EvaluationInstrument;
	examination : Examination;
	active : boolean;
}
