import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private service : AuthService, private router : Router){}
  
  public logout(){
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
