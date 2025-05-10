import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Outcome } from '../../../model/outcome';
import { OutcomeService } from '../../../service/outcome/outcome.service';
import { EducationGoalService } from '../../../service/education-goal/education-goal.service';
import { TeachingMaterialService } from '../../../service/teaching-material/teaching-material.service';
import { Router } from '@angular/router';
import { SubjectService } from '../../../service/subject/subject.service';
import { EducationGoal } from '../../../model/education-goal';
import { Subject } from '../../../model/subject';
import { TeachingMaterial } from '../../../model/teaching-material';

@Component({
  selector: 'app-outcome-form',
  imports: [ReactiveFormsModule],
  templateUrl: './outcome-form.component.html',
  styleUrl: './outcome-form.component.css'
})
export class OutcomeFormComponent {
  educationGoals : EducationGoal[] = [];
  teachingMaterials : TeachingMaterial[] = [];
  subjects : Subject[] = [];
    
  @Input()
  public syllabusForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      description : new FormControl('', [Validators.required]),
      educationGoal : new FormControl(null),
      teachingMaterial : new FormControl(null),
      subject : new FormControl(null)
    });
            
@Output()
submitEvent = new EventEmitter<Outcome>();
            
constructor(private service : OutcomeService, private educationGoalService : EducationGoalService, private teachingMaterialService : TeachingMaterialService, private subjectService : SubjectService,private router : Router){}
              
ngOnInit(): void {
  this.educationGoalService.getAll().subscribe((r : EducationGoal[])=>{
      this.educationGoals = r;
  });

   this.teachingMaterialService.getAll().subscribe((t : TeachingMaterial[])=>{
     this.teachingMaterials = t;
   });

  this.subjectService.getAll().subscribe((s : Subject[])=>{
    this.subjects = s;
  });


}
        
onSubmit() {
    this.submitEvent.emit({...this.syllabusForm.value as Outcome});
  }
}
