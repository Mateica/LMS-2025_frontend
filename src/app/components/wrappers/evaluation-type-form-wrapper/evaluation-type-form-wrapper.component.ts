import { Component } from '@angular/core';
import { EvaluationTypeFormComponent } from '../../forms/evaluation-type-form/evaluation-type-form.component';
import { EvaluationType } from '../../../model/evaluation-type';
import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-type-form-wrapper',
  imports: [EvaluationTypeFormComponent],
  templateUrl: './evaluation-type-form-wrapper.component.html',
  styleUrl: './evaluation-type-form-wrapper.component.css'
})
export class EvaluationTypeFormWrapperComponent {
    evaluationType : EvaluationType | null = null;
    evaluationTypes : EvaluationType[] = [];
    
    constructor(private service : EvaluationTypeService, private router : Router){}
  
    getAll(){
      this.service.getAll().subscribe((r : EvaluationType[])=>{
        this.evaluationTypes = r;
      });
    }
  
     createEvaluationType(t : EvaluationType){
      if(t.id !== undefined){
        this.service.update(t.id, t).subscribe(()=>{
          this.getAll();
          this.router.navigate(["/"]);
        });
      }else{
        this.service.create(t).subscribe(()=>{
          this.getAll();
          this.router.navigate(["/"]);
        });
      }
    }
  
    setEvaluationType(t : EvaluationType){
      this.evaluationType = t;
    }
}
