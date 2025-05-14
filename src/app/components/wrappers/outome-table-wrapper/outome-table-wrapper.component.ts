import { Component } from '@angular/core';
import { Outcome } from '../../../model/outcome';
import { OutcomeService } from '../../../service/outcome/outcome.service';
import { Router } from '@angular/router';
import { OutcomeTableComponent } from "../../tables/outcome-table/outcome-table.component";

@Component({
  selector: 'app-outome-table-wrapper',
  imports: [OutcomeTableComponent],
  templateUrl: './outome-table-wrapper.component.html',
  styleUrl: './outome-table-wrapper.component.css'
})
export class OutomeTableWrapperComponent {
  syllabi : Outcome[] = [];

  constructor(private service : OutcomeService, private router : Router){}

  getAll(){
    this.service.getAll().subscribe((r) =>{
      this.syllabi = r;
    })
  }

  updateSyllabus(t : Outcome){
    this.router.navigate(["/syllabusForm"]);
  }

  deleteSyllabus(t : Outcome){
    if(t.id){
      this.service.delete(t.id).subscribe(()=>{
      this.getAll();
      });
    }
  }
}
