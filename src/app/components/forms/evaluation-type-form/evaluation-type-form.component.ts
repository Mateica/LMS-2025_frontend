import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvaluationType } from '../../../model/evaluation-type';
import { Router } from '@angular/router';
import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';

@Component({
  selector: 'app-evaluation-type-form',
  imports: [ReactiveFormsModule],
  templateUrl: './evaluation-type-form.component.html',
  styleUrl: './evaluation-type-form.component.css'
})
export class EvaluationTypeFormComponent {
  @Input()
  evaluationType : EvaluationType | null = null;
  
  public evaluationTypeForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
    });
  
    @Output()
    submitEvent = new EventEmitter<EvaluationType>();
  
    constructor(private service : EvaluationTypeService, private router : Router){}
  
    onSubmit() {
      this.submitEvent.emit({...this.evaluationTypeForm.value as EvaluationType});
    }
}
