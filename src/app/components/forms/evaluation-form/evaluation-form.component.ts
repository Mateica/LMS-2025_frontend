import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Evaluation } from '../../../model/evaluation';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { Router } from '@angular/router';
import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';
import { ExaminationService } from '../../../service/examination/examination.service';
import { SubjectRealizationService } from '../../../service/subject-realization/subject-realization.service';
import { EvaluationType } from '../../../model/evaluation-type';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { Examination } from '../../../model/examination';
import { SubjectRealization } from '../../../model/subject-realization';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { EvaluationGrade } from '../../../model/evaluation-grade';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-evaluation-form',
  imports: [ReactiveFormsModule, MatLabel, MatInput, MatSelect, MatOption, MatButton],
  templateUrl: './evaluation-form.component.html',
  styleUrl: './evaluation-form.component.css'
})
export class EvaluationFormComponent implements OnInit {
  @Input()
  evaluation: Evaluation | null = null;

  evaluationTypes : EvaluationType[] = [];
  evaluationInstruments : EvaluationInstrument[] = [];
  exams : Examination[] = [];
  subjectRealizations : SubjectRealization[] = [];
  grades : EvaluationGrade[] = [];

  public evaluationForm = new FormGroup({
    startTime: new FormControl(new Date(), [Validators.required]),
    endTime: new FormControl(new Date(), [Validators.required]),
    numberOfPoints: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
    evaluationType: new FormControl('', []),
    evaluationInstrument : new FormControl('', []),
    examination : new FormControl('', []),
    subjectRealization : new FormControl('', []),
    evaluationGrades : new FormControl([],[])
  });

  @Output()
  submitEvent = new EventEmitter<Evaluation>();

  constructor(private service: EvaluationService,
             private evaluationTypeService: EvaluationTypeService,
             private evalInstrumentService : EvaluationInstrumentService,
             private examService : ExaminationService,
             private subjectRealizationService : SubjectRealizationService,
             private gradeService : EvaluationGradeService,
             private router: Router) { }

  ngOnInit(): void {
    this.evaluationTypeService.getAllActive().subscribe((r)=> this.evaluationTypes = r);
    this.evalInstrumentService.getAllActive().subscribe((r)=> this.evaluationInstruments = r);
    this.examService.getAllActive().subscribe((r)=> this.exams = r);
    this.subjectRealizationService.getAllActive().subscribe((r)=> this.subjectRealizations = r);
    this.gradeService.getAllActive().subscribe((r)=> this.grades = r);
  }

  onSubmit() {
    if(this.evaluationForm.valid){
      this.submitEvent.emit({ ...this.evaluationForm.value as Evaluation });
    }
  }
}
