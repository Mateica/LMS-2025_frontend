import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericService } from '../../service/base/generic.service';
import { catchError, of } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-generic-table',
  imports: [NgFor, NgIf],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T extends { id: any }>{
  @Input()
  data : T[] = []

  @Input() 
  columns: { key: keyof T; label: string }[] = [];

  @Output()
  deleteEvent = new EventEmitter<any>();

  @Output()
  updateEvent = new EventEmitter<any>();

  constructor(){}

    public deleteData(data : T){
      this.deleteEvent.emit(data);
    }

    public updateData(data : T){
      this.updateEvent.emit(data);
    }

    trackByIndex(index: number): number {
      return index;
    }
  
    trackByRowId(index: number, row: T): any {
      return row.id;
    }
}
