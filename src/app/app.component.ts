import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mm-structure';
  formControl: FormControl = new FormControl('');
  constructor() {
    this.formControl.valueChanges.subscribe((data) => console.log(data));
  }

  test(e: unknown):void {
    console.log(e);
  }
}
