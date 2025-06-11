import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTableWrapperComponent } from './evaluation-table-wrapper.component';

describe('EvaluationTableWrapperComponent', () => {
  let component: EvaluationTableWrapperComponent;
  let fixture: ComponentFixture<EvaluationTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
