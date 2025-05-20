import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServicePageComponent } from './student-service-page.component';

describe('StudentServicePageComponent', () => {
  let component: StudentServicePageComponent;
  let fixture: ComponentFixture<StudentServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentServicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
