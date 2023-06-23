import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[checkValue]',
})
export class CheckValueDirective {
  value = '';

  constructor(private element: ElementRef) {}

  @HostListener('input') setValue() {
    this.value = this.element.nativeElement.value
  }
}
