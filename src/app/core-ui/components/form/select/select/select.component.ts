/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
  ContentChildren,
  QueryList,
  forwardRef,
  Injectable,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OptionComponent } from '../option/option.component';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  isDropdownOpened = false;
  @ContentChildren(OptionComponent)
  contentChildren!: QueryList<OptionComponent>;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onChange = (value: any) => {};
  onTouched = () => {};
  value: any;
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpened = false;
    }
  }
  constructor(private elementRef: ElementRef) {}
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onSelect(value: any): void {
    this.onChange(value);
  }

  toggleDropdown(): void {
    this.isDropdownOpened = !this.isDropdownOpened;
  }
}
