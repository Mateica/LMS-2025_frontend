import { Component } from '@angular/core';
import { EvaluationInstrumentFormComponent } from '../../forms/evaluation-instrument-form/evaluation-instrument-form.component';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-instrument-form-wrapper',
  imports: [EvaluationInstrumentFormComponent],
  templateUrl: './evaluation-instrument-form-wrapper.component.html',
  styleUrl: './evaluation-instrument-form-wrapper.component.css'
})
export class EvaluationInstrumentFormWrapperComponent {
    evaluationInstrument : EvaluationInstrument | null = null;
    evaluationInstruments : EvaluationInstrument[] = [];
    
    constructor(private service : EvaluationInstrumentService, private router : Router){}
  
    getAll(){
      this.service.getAll().subscribe((r : EvaluationInstrument[])=>{
        this.evaluationInstruments = r;
      });
    }
  
     createEvaluationInstrument(t : EvaluationInstrument){
      console.log(t);
      if(t.id) {
        console.log("called uodate");
        this.service.update(Number(t.id), t).subscribe(()=>{
          this.getAll();
          this.router.navigate(["/"]);
        });
      } else {
        console.table(t);
        const request = {
          id: undefined,
          name: t.name,
          evaluations: [],
          file: undefined,
          active: undefined
        };
        this.service.create(request).subscribe(()=>{
          this.getAll();
          this.router.navigate(["/"]);
        });
      }
    }
  
    setEvaluationInstrument(t : EvaluationInstrument){
      this.evaluationInstrument = t;
    }

}
