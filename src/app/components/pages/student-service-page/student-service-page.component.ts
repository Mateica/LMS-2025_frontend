import { Component, OnInit } from '@angular/core';
import { StudentServiceStaff } from '../../../model/student-service-staff';
import { Router } from '@angular/router';
import { StudentServiceStaffService } from '../../../service/student-service-staff/student-service-staff.service';
import { MatToolbar } from '@angular/material/toolbar';
import { StudentOnYearService } from '../../../service/student-on-year/student-on-year.service';
import { StudentOnYear } from '../../../model/student-on-year';

@Component({
  selector: 'app-student-service-page',
  imports: [MatToolbar],
  templateUrl: './student-service-page.component.html',
  styleUrl: './student-service-page.component.css'
})
export class StudentServicePageComponent implements OnInit {
  staff : StudentServiceStaff[] = [];
  studentsOnYear : StudentOnYear[] = [];

  constructor(private service : StudentServiceStaffService, private studentOnYearService : StudentOnYearService,  private router : Router){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe((r : StudentServiceStaff[])=>{
      this.staff = r.filter(s=> s.active === true); // Dobavljanje svih aktivnih elemenata - da li je ovo u redu?
    });

    this.studentOnYearService.getAll().subscribe((r : StudentOnYear[])=>{
      this.studentsOnYear = r.filter(s=> s.active === true); // Dobavljanje svih aktivnih elemenata - da li je ovo u redu?
    });
  }

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
