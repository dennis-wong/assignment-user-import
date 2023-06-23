import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { CheckValueDirective } from '../check-value.directive';

@Component({
  selector: 'app-stepflow-step',
  templateUrl: './stepflow.step.component.html',
  styleUrls: ['./stepflow.step.component.scss'],
})
export class StepflowStepComponent {
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() tekstVolgende!: string;
  @Input() tekstVorige!: string;
  @Input() active!: boolean;

  @Output() clickActie = new EventEmitter<string>();
  @Output() sendValue = new EventEmitter<string>();

  @ContentChild(CheckValueDirective)
  inputValue: CheckValueDirective;

  send(actie: string) {
    if(!this.inputValue || actie !== 'volgende') {
      this.clickActie.emit(actie);
    } else {
      this.sendValue.emit(this.inputValue.value)
    }
  }
}
