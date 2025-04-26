import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Country } from '../../../model/country';
import { MatTableDataSource } from '@angular/material/table';
import { CountryService } from '../../../service/country/country.service';

@Component({
  selector: 'app-country-table',
  imports: [],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  columns: string[] = ["Name", "Places"];
  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>();
  data : Country[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: CountryService) {
     this.service.getAll().subscribe(r => {
     this.data = r;
     this.dataSource.data = this.data;
  });

    this.dataSource.data = this.data;
  }

  @Output()
  updateEvent  = new EventEmitter<Country>();
      
  @Output()
  deleteEvent = new EventEmitter<Country>();
      
  onUpdate(country : Country){
    this.updateEvent.emit(country);
  }
      
  onDelete(country : Country){
    this.deleteEvent.emit(country);
  }
}
