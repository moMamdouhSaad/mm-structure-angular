import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareButtonModule } from './components/elements/button/square-button/square-button.module';
import { FormModule } from './components/form/form.module';
import { SelectModule } from './components/form/select/select.module';
import { ElementInViewDirective } from './directives/elementInView.directive';

@NgModule({
  declarations: [ElementInViewDirective],
  imports: [CommonModule],
  exports: [
    SquareButtonModule,
    FormModule,
    SelectModule,
    ElementInViewDirective,
  ],
})
export class CoreUiModule {}
