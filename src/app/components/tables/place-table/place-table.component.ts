import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Place } from '../../../model/place';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PlaceService } from '../../../service/place/place.service';

@Component({
  selector: 'app-place-table',
  imports: [],
  templateUrl: './place-table.component.html',
  styleUrl: './place-table.component.css'
})
export class PlaceTableComponent {
  columns: string[] = ["Name", "Country"];
  dataSource: MatTableDataSource<Place> = new MatTableDataSource<Place>();
  data : Place[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: PlaceService) {
     this.service.getAll().subscribe(r => {
     this.data = r;
     this.dataSource.data = this.data;
  });

    this.dataSource.data = this.data;
  }

  @Output()
  updateEvent  = new EventEmitter<Place>();
      
  @Output()
  deleteEvent = new EventEmitter<Place>();
      
  onUpdate(place : Place){
    this.updateEvent.emit(place);
  }
      
  onDelete(place : Place){
    this.deleteEvent.emit(place);
  }
}
