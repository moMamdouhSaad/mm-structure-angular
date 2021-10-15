import { Component, Input } from '@angular/core';
@Component({
  template: '',
})
export abstract class PlaceHolderParentComponent {
  @Input() public appearance:'square'|'line' = 'line';
  @Input() public animation:'progress'|'pulse' = 'pulse';
  @Input() public borderRadius:string = '10px';

}
