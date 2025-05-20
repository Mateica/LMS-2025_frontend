import { Component } from '@angular/core';
import { StudentServiceStaff } from '../../../model/student-service-staff';
import { Router } from '@angular/router';
import { StudentServiceStaffService } from '../../../service/student-service-staff/student-service-staff.service';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-student-service-page',
  imports: [MatToolbar],
  templateUrl: './student-service-page.component.html',
  styleUrl: './student-service-page.component.css'
})
export class StudentServicePageComponent {
  staff : StudentServiceStaff[] = [];

  constructor(private service : StudentServiceStaffService, private router : Router){}

  getAll(){
    this.service.getAll().subscribe((r : StudentServiceStaff[])=>{
      this.staff = r;
    });
  }

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
