import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://picsum.photos/700',
      price: 100
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://picsum.photos/600',
      price: 100
    },
    {
      id: '3',
      name: 'Product 3',
      image: 'https://picsum.photos/500',
      price: 100
    },
    {
      id: '4',
      name: 'Product 4',
      image: 'https://picsum.photos/400',
      price: 100
    }
  ];

  onLoaded(img: string): void {
    console.log('log padre', img);
  }
}


