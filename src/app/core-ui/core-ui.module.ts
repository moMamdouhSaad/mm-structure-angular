import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareButtonModule } from './components/elements/button/square-button/square-button.module';
import { FormModule } from './components/form/form.module';
import { SelectModule } from './components/form/select/select.module';
import { ElementInViewDirective } from './directives/elementInView.directive';
import { ImageComponent } from './components/elements/image/image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ElementInViewDirective, ImageComponent],
  imports: [CommonModule, LazyLoadImageModule],
  exports: [
    SquareButtonModule,
    FormModule,
    SelectModule,
    ElementInViewDirective,
    ImageComponent,
  ],
})
export class CoreUiModule {}
