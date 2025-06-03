import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { Evaluation } from '../../../model/evaluation';

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
    MatNativeDateModule
  ]
})
export class EvaluationFormDialogComponent {
  evaluation: Evaluation = {
    startTime: new Date(),
    endTime: new Date(),
    numberOfPoints: 100,
    evaluationGrades: [],
    active: true
  };

  constructor(
    public dialogRef: MatDialogRef<EvaluationFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save(): void {
    this.dialogRef.close(this.evaluation);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
