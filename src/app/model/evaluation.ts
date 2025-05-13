import { EvaluationInstrument } from "./evaluation-instrument"
import { EvaluationType } from "./evaluation-type"
import { Examination } from "./examination"
import { Outcome } from "./outcome"
import { SubjectRealization } from "./subject-realization"

export interface Evaluation {
    id? : number;
	startTime : Date;
	endTime : Date;
	numberOfPoints : number;
	evaluationType? : EvaluationType;
	evaluationInstrument? : EvaluationInstrument;
	examination? : Examination;
	subjectRealization? : SubjectRealization;
	active : boolean;
}
