import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserFormComponent } from './registered-user-form.component';

describe('RegisteredUserFormComponent', () => {
  let component: RegisteredUserFormComponent;
  let fixture: ComponentFixture<RegisteredUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredUserFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
