import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output()
  close = new EventEmitter();
  @Output()
  submit = new EventEmitter();
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
  handleSubmitModal() {
    this.submit.emit();
  }
  handleCloseModal() {
    this.close.emit();
  }
}
