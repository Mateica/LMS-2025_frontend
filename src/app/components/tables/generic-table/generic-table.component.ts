import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableMetadata } from '../../../model/metadata';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-generic-table',
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatFormField,
    MatLabel,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements AfterViewInit, OnChanges {
  @Input()
  tableMetadata!: TableMetadata;

  @Input() 
  data: any[] = [];

  @Output() 
  actionEmitter = new EventEmitter<{ event: string; payload: any }>();
  @Output() 
  pageEmitter = new EventEmitter<PageEvent>();
  @Output()
  sortEmitter = new EventEmitter<Sort>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selection = new SelectionModel<any>(true, []);
  dataSource = new MatTableDataSource<any>([]);

  length = 0;
  pageIndex = 0;
  pageSize = 5;

  activeSort: string | null = null;
  sortDirection: 'asc' | 'desc' | '' = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource.data = this.data;
      this.length = this.data.length;
      this.selection.clear();

      if (this.paginator) {
        this.paginator.firstPage();
      }

      // Set custom filter predicate using columns metadata
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const filterLower = filter.trim().toLowerCase();
        return this.tableMetadata.columns.some((col) => {
          const value = col.displayFn
            ? col.displayFn(data, col.key, this.data)
            : data[col.key];
          return (value + '').toLowerCase().includes(filterLower);
        });
      };
    }
    if (changes['tableMetadata'] && this.tableMetadata) {
      this.pageSize = this.tableMetadata.pageSize ?? 5;
      this.length = this.data.length;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Support nested property sorting (e.g., 'user.name')
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property.indexOf('.') !== -1) {
        return property.split('.').reduce((obj, key) => obj && obj[key], item);
      }
      return item[property];
    };

    this.sort.sortChange.subscribe((sortState: Sort) => {
      this.activeSort = sortState.active;
      this.sortDirection = sortState.direction;

      this.pageIndex = 0;
      if (this.paginator) {
        this.paginator.pageIndex = 0;
      }

      this.sortEmitter.emit(sortState);
      this.pageEmitter.emit({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        length: this.length,
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEmitEvent(event: string, payload: any) {
    this.actionEmitter.emit({ event, payload });
  }

  onPageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pageEmitter.emit(event);
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows && numRows > 0;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.filteredData);
    }
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    const index = this.dataSource.filteredData.indexOf(row) + 1;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${index}`;
  }
}

