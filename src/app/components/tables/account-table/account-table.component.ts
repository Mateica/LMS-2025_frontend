import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../../model/account';

@Component({
  selector: 'app-account-table',
  imports: [],
  templateUrl: './account-table.component.html',
  styleUrl: './account-table.component.css'
})
export class AccountTableComponent {
  @Input()
  data : Account[] = [];
  
  columns : string[] = ["Email","Username", "Password"];
  
    @Output()
    updateEvent  = new EventEmitter<Account>();
  
    @Output()
    deleteEvent = new EventEmitter<Account>();
  
    constructor(){}
  
    onUpdate(account : Account){
      this.updateEvent.emit(account);
    }
  
    onDelete(account : Account){
      this.deleteEvent.emit(account);
    }
}
