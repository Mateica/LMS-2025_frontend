import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationInstrumentTableComponent } from './evaluation-instrument-table.component';

describe('EvaluationInstrumentTableComponent', () => {
  let component: EvaluationInstrumentTableComponent;
  let fixture: ComponentFixture<EvaluationInstrumentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationInstrumentTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationInstrumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
