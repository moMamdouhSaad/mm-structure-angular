/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  template: '',
})
export abstract class ButtonParentComponent<ButtonTypes = any> {
  @Input() public type: 'button' | 'submit' = 'button';
  @Input() public buttonType!: ButtonTypes;
  @Input() public iconButton = false;
  @Input() public text = '';
  @Input() public disabled = false;
  @Input() public buttonStyle!: { [key: string]: string };
  @Input() public buttonClass: { [key: string]: boolean };
  @Output() public clicked = new EventEmitter<void>();
  constructor() {
    this.buttonClass = { 'mm-btn': true };
  }
  public onClick() {
    if (!this.disabled) {
      this.clicked.emit();
      // const p = "aasdasd";
      const t = 'asdasdasdas';
    }
  }
}
