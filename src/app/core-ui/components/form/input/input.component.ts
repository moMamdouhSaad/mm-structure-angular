import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // Function to call when the rating changes.
  onChange = (value: any) => {};
  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};
  value: any;

  writeValue(obj: any): void {
    this.value = obj;
    // this.onChange('asda');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
