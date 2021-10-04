import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareButtonModule } from './components/elements/button/square-button/square-button.module';
import { FormModule } from './components/form/form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [SquareButtonModule, FormModule],
})
export class CoreUiModule {}
