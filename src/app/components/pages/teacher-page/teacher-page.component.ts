import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLinkWithHref } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-teacher-page',
  imports: [MatToolbarModule,MatIconModule, RouterLinkWithHref],
  templateUrl: './teacher-page.component.html',
  styleUrl: './teacher-page.component.css'
})
export class TeacherPageComponent {
  constructor(private authService : AuthService, private router : Router){}

    navigateTo(path: string) {
      this.router.navigate(['/' + path]);
    }

    logout(){
      this.authService.logout();
      this.router.navigate(['/']);
    }
}
