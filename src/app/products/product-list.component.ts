import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { IProduct } from './product';
import {trigger, state ,style,animate, transition} from '@angular/animations';

@Component({
selector:'pm-products',
templateUrl:'./product-list.component.html',
styleUrls:['product-list.components.css'],
animations: [
trigger('rotatedState', [
  state('default', style({ transform: 'rotate(0)' })),
  state('rotated', style({ transform: 'rotate(-180deg)' })),
  transition('rotated => default', animate('1500ms ease-out')),
  transition('default => rotated', animate('400ms ease-in'))
              ])
            ]
        }) 

export class ProductListComponent {
pageTitle: string = 'Fruit Smoothies List !!';
imageWidth: number = 350;
imageMargin: number = 3;
showPhoto: boolean = false;
listFilter: string = 'cart';
products: IProduct[] = [
{
    "productId": 1,
    "productName": "Pineapple Splash",
    "releaseDate": "10.9.2019",
    "description":  "This splendid drink is made fresh from frozen pineapples, almond milk, and a drop of black maca powder.",
    "price": 7.97,
    "starRating": 3.5,
    "imageUrl": "assets/images/pineapple-smoothie-3.jpg"
    
  },
  {
    "productId": 2,
    "productName": "Watermelon Smoothie",
    "releaseDate": "10.8.2019",
    "description": "Excellent drink made with frozen watermelons, vanilla extract and warm coconut milk",
    "price": 5.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/watermelon-smoothie-resize-4.jpg"
    
  },
  {
    "productId": 5,
    "productName": "Kiwi Waterfall Smoothie",
    "releaseDate": "10.7.2019",
    "description": "Great taste and leaves you filling great.",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/shamrock-smoothie-kale-banana-kiwi-and-m.jpg"
  },
  {
    "productId": 8,
    "productName": "Peach Sunrise Smoothie",
    "releaseDate": "10.8.2019",
    "description": "With unlimited refills, packs a great taste made wuth frozen peaches, maca powder, and orange juice.",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "assets/images/peach.jpg"
  },
  {
    "productId": 10,
    "productName": "Apple Pie Smoothie",
    "releaseDate": "10.8.19",
    "description": "Great smoothie mixed with cinnamon and apples",
    "price": 5.95,
    "starRating": 4.6,
    "imageUrl": "assets/images/Apple-Pie-Smoothie-6.jpg"
  }
];

togglePhoto(): void {
  this.showPhoto = !this.showPhoto;
}
  }
  export class RotateComponent { 

    state: string = 'default';

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

}

 