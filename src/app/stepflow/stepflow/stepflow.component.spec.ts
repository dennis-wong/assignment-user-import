import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepflowComponent } from './stepflow.component';

describe('StepflowComponent', () => {
  let component: StepflowComponent;
  let fixture: ComponentFixture<StepflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepflowComponent]
    });
    fixture = TestBed.createComponent(StepflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
