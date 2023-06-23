import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StepflowComponent } from './stepflow/stepflow/stepflow.component';
import { StepflowStepComponent } from './stepflow/stepflow-step/stepflow.step.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckValueDirective } from './stepflow/check-value.directive';

@NgModule({
  declarations: [
    AppComponent,
    StepflowComponent,
    StepflowStepComponent,
    CheckValueDirective,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
