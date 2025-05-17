import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Outcome } from '../../../model/outcome';
import { OutcomeService } from '../../../service/outcome/outcome.service';
import { Router } from '@angular/router';
import { OutcomeFormComponent } from "../../forms/outcome-form/outcome-form.component";

@Component({
  selector: 'app-outcome-form-wrapper',
  imports: [ReactiveFormsModule, OutcomeFormComponent],
  templateUrl: './outcome-form-wrapper.component.html',
  styleUrl: './outcome-form-wrapper.component.css'
})
export class OutcomeFormWrapperComponent {
  syllabus : Outcome | null = null;
  syllabi : Outcome[] = [];
      
  constructor(private service : OutcomeService, private router : Router){}
    
  getAll(){
    this.service.getAll().subscribe((r)=>{
      this.syllabi = r;
    });
  }
    
  createEvaluationType(t : Outcome){
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
    
  setEvaluationType(t : Outcome){
    this.syllabus = t;
  }
}
