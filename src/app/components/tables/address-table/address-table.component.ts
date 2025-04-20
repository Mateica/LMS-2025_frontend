import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../../../model/address';

@Component({
  selector: 'app-address-table',
  imports: [],
  templateUrl: './address-table.component.html',
  styleUrl: './address-table.component.css'
})
export class AddressTableComponent {
  @Input()
  data : Address[] = [];
    
  columns : string[] = ["Street", "House Number", "Place"];
    
      @Output()
      updateEvent  = new EventEmitter<Address>();
    
      @Output()
      deleteEvent = new EventEmitter<Address>();
    
      constructor(){}
    
      onUpdate(address : Address){
        this.updateEvent.emit(address);
      }
    
      onDelete(address : Address){
        this.deleteEvent.emit(address);
      }
}
