import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentServiceStaff } from '../../../model/student-service-staff';
import { StudentServiceStaffService } from '../../../service/student-service-staff/student-service-staff.service';
import { Router } from '@angular/router';
import { RegisteredUserService } from '../../../service/registered-user/registered-user.service';
import { StudentAffairsOffice } from '../../../model/student-affairs-office';
import { StudentOfficeService } from '../../../service/student-office/student-office.service';
import { RegisteredUser } from '../../../model/registered-user';

@Component({
  selector: 'app-student-service-staff-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-service-staff-form.component.html',
  styleUrl: './student-service-staff-form.component.css'
})
export class StudentServiceStaffFormComponent implements OnInit {
  @Input()
  staffMember : StudentServiceStaff | null = null;

  users : RegisteredUser[] = [];
  studentAffairsOffices : StudentAffairsOffice[] = [];


    public staffForm = new FormGroup({
      registeredUser : new FormControl(),
      firstName : new FormControl('',[Validators.required]),
      lastName : new FormControl('',[Validators.required]),
      studentAffairsOffice : new FormControl()
    });
  
    @Output()
    submitEvent = new EventEmitter<StudentServiceStaff>();
  
    constructor(private service : StudentServiceStaffService, private userService : RegisteredUserService,
      private studentOfficeService : StudentOfficeService, private router : Router){}

    ngOnInit(): void {
      this.userService.getAllActive().subscribe(r=>{
        this.users = r;
      });

      this.studentOfficeService.getAll().subscribe(r=>{
        this.studentAffairsOffices = r;
      });
    }
  
    onSubmit() {
      this.submitEvent.emit({...this.staffForm.value as StudentServiceStaff});
    }
}
