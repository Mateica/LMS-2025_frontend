import { Component, OnInit } from '@angular/core';
import { StudentServiceStaff } from '../../../model/student-service-staff';
import { Router, RouterLinkWithHref } from '@angular/router';
import { StudentServiceStaffService } from '../../../service/student-service-staff/student-service-staff.service';
import { MatToolbar } from '@angular/material/toolbar';
import { StudentOnYearService } from '../../../service/student-on-year/student-on-year.service';
import { StudentOnYear } from '../../../model/student-on-year';
import { AuthService } from '../../../auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-student-service-page',
  imports: [MatToolbar, MatIconModule,RouterLinkWithHref],
  templateUrl: './student-service-page.component.html',
  styleUrl: './student-service-page.component.css'
})
export class StudentServicePageComponent implements OnInit {
  staff : StudentServiceStaff[] = [];
  studentsOnYear : StudentOnYear[] = [];

  constructor(private service : StudentServiceStaffService, private studentOnYearService : StudentOnYearService, private authService : AuthService,  private router : Router){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAllActive().subscribe((r : StudentServiceStaff[])=>{
      this.staff = r;
    });

    this.studentOnYearService.getAllActive().subscribe((r : StudentOnYear[])=>{
      this.studentsOnYear = r;
    });
  }

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
