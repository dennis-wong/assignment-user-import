import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepflowStepComponent } from './stepflow.step.component';

describe('StepflowStepComponent', () => {
  let component: StepflowStepComponent;
  let fixture: ComponentFixture<StepflowStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepflowStepComponent]
    });
    fixture = TestBed.createComponent(StepflowStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
