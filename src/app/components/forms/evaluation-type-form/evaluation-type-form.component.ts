import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvaluationType } from '../../../model/evaluation-type';
import { Router } from '@angular/router';
import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';
import { Evaluation } from '../../../model/evaluation';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-evaluation-type-form',
  imports: [ReactiveFormsModule, MatInput, MatFormField, MatLabel, MatSelect, MatOption],
  templateUrl: './evaluation-type-form.component.html',
  styleUrl: './evaluation-type-form.component.css'
})
export class EvaluationTypeFormComponent {
  @Input()
  evaluationType : EvaluationType | null = null;

  evaluations : Evaluation[] = [];
  
  public evaluationTypeForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      evaluation : new FormControl(null)
    });
  
    @Output()
    submitEvent = new EventEmitter<EvaluationType>();
  
    constructor(private service : EvaluationTypeService, private router : Router){}
  
    onSubmit() {
      this.submitEvent.emit({...this.evaluationTypeForm.value as EvaluationType});
    }
}
