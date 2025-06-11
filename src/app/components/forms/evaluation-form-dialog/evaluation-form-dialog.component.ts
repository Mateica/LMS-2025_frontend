import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Evaluation } from '../../../model/evaluation';
import { EvaluationType } from '../../../model/evaluation-type';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { Examination } from '../../../model/examination';
import { SubjectRealization } from '../../../model/subject-realization';

import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';
import { ExaminationService } from '../../../service/examination/examination.service';
import { SubjectRealizationService } from '../../../service/subject-realization/subject-realization.service';


@Component({
  selector: 'app-evaluation-form-dialog',
  standalone: true,
  templateUrl: './evaluation-form-dialog.component.html',
  styleUrl: './evaluation-form-dialog.component.css',
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class EvaluationFormDialogComponent implements OnInit {
  evaluation: Evaluation = {
    startTime: new Date(),
    endTime: new Date(),
    numberOfPoints: 100,
    evaluationGrades: [],
    active: true
  };

  // Separate date/time inputs
  startDate: Date = new Date();
  startTime: string = '08:00';
  endDate: Date = new Date();
  endTime: string = '09:00';

  // Dropdown data
  evaluationTypes: EvaluationType[] = [];
  evaluationInstruments: EvaluationInstrument[] = [];
  examinations: Examination[] = [];
  subjectRealizations: SubjectRealization[] = [];

  constructor(
    public dialogRef: MatDialogRef<EvaluationFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private evaluationTypeService: EvaluationTypeService,
    private evalInstrumentService: EvaluationInstrumentService,
    private examService: ExaminationService,
    private subjectRealizationService: SubjectRealizationService
  ) { }

  ngOnInit(): void {
    // Init data if editing
    if (this.data) {
      this.evaluation = { ...this.data };
      this.startDate = new Date(this.evaluation.startTime);
      this.startTime = this.toTimeString(this.evaluation.startTime);
      this.endDate = new Date(this.evaluation.endTime);
      this.endTime = this.toTimeString(this.evaluation.endTime);
    }

    // Fetch dropdown data (adjust service methods to match your backend)
    this.evaluationTypeService.getAll().subscribe({
      next: data => this.evaluationTypes = data,
      error: err => console.error('Error loading evaluation types', err)
    });

    this.evalInstrumentService.getAll().subscribe({
      next: data => this.evaluationInstruments = data,
      error: err => console.error('Error loading evaluation instruments', err)
    });

    this.examService.getAll().subscribe({
      next: data => this.examinations = data,
      error: err => console.error('Error loading examinations', err)
    });

    this.subjectRealizationService.getAll().subscribe({
      next: data => this.subjectRealizations = data,
      error: err => console.error('Error loading subject realizations', err)
    });
    console.log(this.evaluationTypes);

  }

  private toTimeString(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  save(): void {
    // Merge date and time
    const [sh, sm] = this.startTime.split(':').map(Number);
    const [eh, em] = this.endTime.split(':').map(Number);

    this.evaluation.startTime = new Date(this.startDate);
    this.evaluation.startTime.setHours(sh, sm, 0, 0);

    this.evaluation.endTime = new Date(this.endDate);
    this.evaluation.endTime.setHours(eh, em, 0, 0);

    this.dialogRef.close(this.evaluation);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

