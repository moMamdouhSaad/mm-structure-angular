import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlaceHolderParentComponent } from '../placeholder-parent.component';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderComponent extends PlaceHolderParentComponent {
  constructor() {
    super();
  }
}
