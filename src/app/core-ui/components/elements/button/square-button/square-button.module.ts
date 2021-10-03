import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';

import { SquareButtonComponent } from './square-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SquareButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    DefaultButtonComponent,
  ],
  exports: [SquareButtonComponent],
})
export class SquareButtonModule {}
