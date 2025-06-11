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

@Component({
  selector: 'app-evaluation-grade-form',
  imports: [ReactiveFormsModule, MatLabel, MatInput, MatSelect, MatOption],
  templateUrl: './evaluation-grade-form.component.html',
  styleUrl: './evaluation-grade-form.component.css'
})
export class EvaluationGradeFormComponent implements OnInit {
  @Input()
  grade: EvaluationGrade | null = null;

  evaluations: Evaluation[] = [];
  teachers: Teacher[] = [];

  public gradeForm = new FormGroup({
    evaluation : new FormControl('',[]),
    teacher : new FormControl([], []),
    dateTimeEvaluated : new FormControl(new Date, [Validators.required]),
    mark : new FormControl(0, [Validators.required])

  });

  @Output()
  submitEvent = new EventEmitter<EvaluationGrade>();

  constructor(private service: EvaluationGradeService, private evalService: EvaluationService, private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.teacherService.getAllActive().subscribe((r) => {
      this.teachers = r;
      console.log(this.teachers);
    });
    this.evalService.getAllActive().subscribe((r) => this.evaluations = r);
  }

  onSubmit(){
    if(this.gradeForm.valid){
      this.submitEvent.emit({... this.gradeForm.value} as EvaluationGrade);
    }
  }
}
