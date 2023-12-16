import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.sass'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() dismiss = new EventEmitter();
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }
  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
  onDismiss() {
    this.dismiss.emit();
  }
}
