import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../../model/account';
import { Router } from '@angular/router';
import { AccountService } from '../../../service/account.service';

@Component({
  selector: 'app-account-form',
  imports: [ReactiveFormsModule],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class AccountFormComponent {
  public accountForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      username : new FormControl('', [Validators.required]),
	    password : new FormControl('', [Validators.required]),
	    email : new FormControl('', [Validators.required, Validators.email])
    });
  
    @Output()
    submitEvent = new EventEmitter<Account>();
  
    constructor(private service : AccountService, private router : Router){}
  
    onSubmit() {
      this.submitEvent.emit({...this.accountForm.value as Account});
    }
}
