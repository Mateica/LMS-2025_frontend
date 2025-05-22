import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentOnYearService } from '../../service/student-on-year/student-on-year.service';
import { StudentOnYear } from '../../model/student-on-year';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { StudentService } from '../../service/student/student.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-search',
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel],
  templateUrl: './student-search.component.html',
  styleUrl: './student-search.component.css'
})
export class StudentSearchComponent implements OnInit {
  filteredStudents : Student[] = [];
  studentsOnYear : StudentOnYear[] = [];

  searchInput : FormGroup = new FormGroup({
    input : new FormControl()
  });

  @Output()
  searchEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor(private studentService : StudentService,private studentOnYearService : StudentOnYearService){}

  ngOnInit(): void {
    this.studentOnYearService.getAll().subscribe(s =>{
      this.studentsOnYear = s;
    })
  }

  onSearch(){
    this.searchEvent.emit(this.searchInput.value);
  }

  searchStudents(params : any){
    if(params === undefined){
      // params = this.params;
    }else{
    //  this.params = params;
    }

    this.studentService.searchStudents(params).subscribe(s=>{
      this.filteredStudents = s;
    });
  }
}
