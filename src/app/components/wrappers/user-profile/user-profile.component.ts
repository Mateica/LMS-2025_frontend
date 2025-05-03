import { Component } from '@angular/core';
import { RegisteredUser } from '../../../model/registered-user';
import { RegisteredUserService } from '../../../service/registered-user/registered-user.service';
import { RegisteredUserFormComponent } from "../../forms/registered-user-form/registered-user-form.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [RegisteredUserFormComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user : RegisteredUser | null = null;

  constructor(private service : RegisteredUserService, private router : Router){}

  editProfile(user : RegisteredUser){
    if(user.id !== undefined){
      this.service.update(user.id, user).subscribe(r=>{
        this.router.navigate(["/"]);
      });
    }
  }
}
