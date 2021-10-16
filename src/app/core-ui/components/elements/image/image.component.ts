/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements  OnChanges {
  @Input() src = '/assets/images/default.jpg';

  @Input() alt = 'Image';
  @Input() ratio = '';

  
  onImgError(event: any) {
    event.target.src = '/assets/images/default.jpg';
    //Do other stuff with the event.target
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.src?.currentValue) {
    }
  }
}
