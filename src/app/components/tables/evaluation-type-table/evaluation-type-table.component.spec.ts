import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTypeTableComponent } from './evaluation-type-table.component';

describe('EvaluationTypeTableComponent', () => {
  let component: EvaluationTypeTableComponent;
  let fixture: ComponentFixture<EvaluationTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationTypeTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
