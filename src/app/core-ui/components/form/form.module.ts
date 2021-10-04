import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, TextareaComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent, TextareaComponent],
})
export class FormModule {}
