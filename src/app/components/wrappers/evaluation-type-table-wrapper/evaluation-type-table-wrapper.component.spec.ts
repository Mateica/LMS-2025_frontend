import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTypeTableWrapperComponent } from './evaluation-type-table-wrapper.component';

describe('EvaluationTypeTableWrapperComponent', () => {
  let component: EvaluationTypeTableWrapperComponent;
  let fixture: ComponentFixture<EvaluationTypeTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationTypeTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTypeTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
