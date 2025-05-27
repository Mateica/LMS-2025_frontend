import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { StudentService } from '../../../service/student/student.service';
import { StudentOnYearService } from '../../../service/student-on-year/student-on-year.service';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { ExaminationService } from '../../../service/examination/examination.service';

@Component({
  selector: 'app-student-page',
  imports: [MatToolbar],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {
  constructor(private service : StudentService, private studentOnYearService : StudentOnYearService, private evalService : EvaluationService, private gradeService : EvaluationGradeService,
    private examService : ExaminationService, private authService : AuthService,  private router : Router){}

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
  
}
