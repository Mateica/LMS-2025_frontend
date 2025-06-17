import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvaluationGrade } from '../../../model/evaluation-grade';
import { Evaluation } from '../../../model/evaluation';
import { Teacher } from '../../../model/teacher';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { TeacherService } from '../../../service/teacher/teacher.service';
import { Router } from '@angular/router';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-evaluation-grade-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatInput, MatSelect, MatOption, MatFormFieldModule, MatButtonModule, NgFor],
  templateUrl: './evaluation-grade-form.component.html',
  styleUrl: './evaluation-grade-form.component.css'
})
export class EvaluationGradeFormComponent {
  @Input()
  grade: EvaluationGrade | null = null;

  @Input()
  evaluations: Evaluation[] = [];

  @Input()
  teachers: Teacher[] = [];

  public gradeForm = new FormGroup({
    evaluation: new FormControl(null, []),
    teacher: new FormControl(null, []),
    dateTimeEvaluated: new FormControl(new Date, [Validators.required]),
    mark: new FormControl(0, [Validators.required, Validators.min(5), Validators.max(10)])

  });

  @Output()
  submitEvent = new EventEmitter<EvaluationGrade>();

  constructor(private service: EvaluationGradeService, private evalService: EvaluationService, private teacherService: TeacherService, private toaster : ToastrService, private router: Router) { }

  onSubmit() {
    if (this.gradeForm.valid) {
      const formValue = this.gradeForm.value;

      // Pronađi objekat Evaluation i Teacher po id-ju iz forme
      const evaluationConst = this.evaluations.find(e => e.id === formValue.evaluation);
      const teacherConst = this.teachers.find(t => t.id === formValue.teacher);

      // Parsiraj datum sa forme (koji je tipa string)
      if (!formValue.dateTimeEvaluated) {
        // Datum nije postavljen, prekini ili javi grešku
        return;
      }
      const dateEvaluated = new Date(formValue.dateTimeEvaluated);
      if (isNaN(dateEvaluated.getTime())) {
        // Datum nije validan
        return;
      }

      // Sastavi objekat za slanje
      const grade: EvaluationGrade = {
        ...formValue,
        evaluation: evaluationConst, // može biti undefined što je ok jer je opcionalno
        teacher: teacherConst,       // može biti undefined što je ok
        dateTimeEvaluated: dateEvaluated,
        mark: formValue.mark!        // ovde se oslanjamo na validaciju forme, pa sigurno nije null/undefined
      };

      this.submitEvent.emit(grade);
    }else{
        this.toaster.error("Please fill out all the fields correctly")
        return
    } 
  }
}