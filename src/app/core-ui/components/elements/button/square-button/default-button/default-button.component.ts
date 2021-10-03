import { Component, Inject } from '@angular/core';
import { ButtonChildComponent } from '../../button-child.component';
import { SquareButtonTypes } from '../square-button-types';
import { SquareButtonComponent } from '../square-button.component';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss'],
})
export class DefaultButtonComponent extends ButtonChildComponent<SquareButtonTypes> {
  constructor(@Inject(SquareButtonComponent) parent: SquareButtonComponent) {
    super();
    this.parent = parent;
  }
}
