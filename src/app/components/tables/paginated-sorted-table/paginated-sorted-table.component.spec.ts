import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedSortedTableComponent } from './paginated-sorted-table.component';

describe('PaginatedSortedTableComponent', () => {
  let component: PaginatedSortedTableComponent;
  let fixture: ComponentFixture<PaginatedSortedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedSortedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedSortedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
