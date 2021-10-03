import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareButtonModule } from './square-button/square-button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SquareButtonModule],
  exports: [SquareButtonModule],
})
export class ButtonModule {}
