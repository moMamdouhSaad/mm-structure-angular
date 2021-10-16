/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { ButtonParentComponent } from '../button-parent.component';
import { SquareButtonTypes } from './square-button-types';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss'],
})
export class SquareButtonComponent
  extends ButtonParentComponent<SquareButtonTypes>
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit() {}
  tesa(){
    console.log('asdas')
        console.log('asdas')

  }
}
