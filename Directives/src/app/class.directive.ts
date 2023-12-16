import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  @Input()
  set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  constructor(private element: ElementRef) {

  }

}
