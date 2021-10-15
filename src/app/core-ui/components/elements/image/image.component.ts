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
export class ImageComponent implements OnInit, OnChanges {
  @Input() src: string = '/assets/images/default.jpg';

  @Input() alt = 'Image';
  @Input() ratio = '';

  constructor() {}

  ngOnInit(): void {}
  onImgError(event: any) {
    event.target.src = '/assets/images/default.jpg';
    //Do other stuff with the event.target
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.src?.currentValue) {
    }
  }
}
