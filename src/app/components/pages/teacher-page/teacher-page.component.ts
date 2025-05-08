import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-teacher-page',
  imports: [MatToolbarModule, RouterLinkWithHref],
  templateUrl: './teacher-page.component.html',
  styleUrl: './teacher-page.component.css'
})
export class TeacherPageComponent {
  constructor(private router : Router){}
  
    navigateTo(path: string) {
      this.router.navigate(['/' + path]);
    }
}
