import { Component, Input } from '@angular/core';
import { IContragent } from 'src/app/models/contragent';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() user: IContragent
  

}
