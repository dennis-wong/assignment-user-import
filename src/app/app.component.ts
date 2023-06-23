import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stepNotifier: Subject<string> = new Subject<string>();

  constructor() {}

  gaVerder() {
    this.stepNotifier.next('volgende');
  }

  checkInput(value: string) {
    if(value)
    this.gaVerder()
  }
}
