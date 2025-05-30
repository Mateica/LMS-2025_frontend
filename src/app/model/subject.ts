import { Outcome } from "./outcome"
import { SubjectRealization } from "./subject-realization";
import { YearOfStudy } from "./year-of-study"

export interface Subject {
    id : number;
	name : string;
	ects : number;
	compulsory : boolean;
	numberOfClasses : number;
	numberOfPractices : number;
	otherTypesOfClasses : number;
	researchWork : number;
	classesLeft : number;
    numberOfSemesters : number; 
	yearOfStudy : YearOfStudy;
    syllabi : Outcome[];
	subjectRealizations : SubjectRealization[];
	prerequisite? : Subject; // Mozda 1 : *?
}
