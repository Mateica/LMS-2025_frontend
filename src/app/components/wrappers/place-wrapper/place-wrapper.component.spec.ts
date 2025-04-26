import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceWrapperComponent } from './place-wrapper.component';

describe('PlaceWrapperComponent', () => {
  let component: PlaceWrapperComponent;
  let fixture: ComponentFixture<PlaceWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
