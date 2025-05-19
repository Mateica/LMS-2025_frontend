import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTableWrapperComponent } from './teacher-table-wrapper.component';

describe('TeacherTableWrapperComponent', () => {
  let component: TeacherTableWrapperComponent;
  let fixture: ComponentFixture<TeacherTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
