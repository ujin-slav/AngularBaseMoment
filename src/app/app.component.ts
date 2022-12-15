import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { data as products } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course';

  products:IProduct[] = products
}
