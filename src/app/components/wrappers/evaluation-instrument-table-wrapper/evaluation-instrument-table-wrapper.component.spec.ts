import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationInstrumentTableWrapperComponent } from './evaluation-instrument-table-wrapper.component';

describe('EvaluationInstrumentTableWrapperComponent', () => {
  let component: EvaluationInstrumentTableWrapperComponent;
  let fixture: ComponentFixture<EvaluationInstrumentTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationInstrumentTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationInstrumentTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
