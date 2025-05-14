import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutomeTableWrapperComponent } from './outome-table-wrapper.component';

describe('OutomeTableWrapperComponent', () => {
  let component: OutomeTableWrapperComponent;
  let fixture: ComponentFixture<OutomeTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutomeTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutomeTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
