/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[elementInView]',
})
export class ElementInViewDirective implements AfterViewInit, OnDestroy {
  @Output() visibilityChange: EventEmitter<string> = new EventEmitter<string>();
  private _observer!: IntersectionObserver;

  constructor(@Host() private _elementRef: ElementRef) {
    _elementRef.nativeElement.style.backgroundColor = 'blue';
  }

  ngAfterViewInit(): void {
    const options = { root: null, rootMargin: '0px', threshold: 0.0 };
    this._observer = new IntersectionObserver(this._callback, options);
    this._observer.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy():void {
    this._observer.disconnect();
  }

  private _callback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      this.visibilityChange.emit(entry.isIntersecting ? 'VISIBLE' : 'HIDDEN');
    });
  };
}
