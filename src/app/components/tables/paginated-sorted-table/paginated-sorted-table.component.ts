import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Role } from '../../../model/role';
import { RoleService } from '../../../service/role/role.service';

@Component({
  selector: 'app-paginated-sorted-table',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './paginated-sorted-table.component.html',
  styleUrl: './paginated-sorted-table.component.css'
})
export class PaginatedSortedTableComponent {
  columns: string[] = ["Name"];
  dataSource: MatTableDataSource<Role> = new MatTableDataSource<Role>();
  roles: Role[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: RoleService) {
    this.service.getAll().subscribe(r => {
      this.roles = r;
      this.dataSource.data = this.roles;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
