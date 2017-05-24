import { EventEmitter } from '@angular/core';
import { Shop } from './shop.model';

export class ShopService {
    selectedItems = new EventEmitter<Shop>();
    private shopProducts: Shop[] = [
        new Shop('Your product', '$19.99', 'img/pr-2-1.jpg', 'img/pr-2-3.jpg'),
        new Shop('Your product', '$19.99', 'img/pr-3-1.jpg', 'img/pr-3-3.jpg'),
        new Shop('Your product', '$19.99', 'img/pr-4-3.jpg', 'img/pr-4-3.jpg'),
        new Shop('Your product', '$19.99', 'img/pr-2-1.jpg', 'img/pr-2-3.jpg'),
        new Shop('Your product', '$19.99', 'img/pr-3-1.jpg', 'img/pr-3-3.jpg'),
        new Shop('Your product', '$19.99', 'img/pr-4-3.jpg', 'img/pr-4-3.jpg')
    ];

    getShopProducts(){
        return this.shopProducts.slice();
    }
}