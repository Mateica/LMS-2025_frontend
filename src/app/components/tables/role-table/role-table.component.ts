import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Role } from '../../../model/role';

@Component({
  selector: 'app-role-table',
  imports: [],
  templateUrl: './role-table.component.html',
  styleUrl: './role-table.component.css'
})
export class RoleTableComponent {
  @Input()
  data : Role[] = [];

  columns : string[] = ["Name"];

  @Output()
  updateEvent  = new EventEmitter<Role>();

  @Output()
  deleteEvent = new EventEmitter<Role>();

  constructor(){}

  onUpdate(role : Role){
    this.updateEvent.emit(role);
  }

  onDelete(role : Role){
    this.deleteEvent.emit(role);
  }
}
