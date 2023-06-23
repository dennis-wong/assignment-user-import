import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { StepflowStepComponent } from '../stepflow-step/stepflow.step.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stepflow',
  templateUrl: './stepflow.component.html',
  styleUrls: ['./stepflow.component.scss'],
})
export class StepflowComponent implements AfterContentInit {
  @Input() notifier: Subject<string>;

  @ContentChildren(StepflowStepComponent)
  stepList!: QueryList<StepflowStepComponent>;

  clickActie(actie: string) {
    const indexWaarActiveOpStaat = this.stepList
      .toArray()
      .findIndex((step) => step.active);
    const huidigeStep = this.stepList.get(indexWaarActiveOpStaat);
    const volgendeStep = this.stepList.get(indexWaarActiveOpStaat + 1);
    const vorigeStep = this.stepList.get(indexWaarActiveOpStaat - 1);

    huidigeStep!.active = false;
    if (actie === 'volgende') {
      if (huidigeStep?.last !== true) {
        volgendeStep!.active = true;
      } else {
        huidigeStep!.active = true;
      }
    } else {
      vorigeStep!.active = true;
    }
  }

  ngAfterContentInit() {
    this.stepList.get(0)!.active = true;

    this.stepList.forEach((step) => {
      step.clickActie.subscribe((actie) => {
        this.clickActie(actie);
      });
    });

    this.notifier.subscribe((actie) => {
      this.clickActie(actie);
    });
  }
}
