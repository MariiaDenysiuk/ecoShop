import {Component, OnInit, DoCheck} from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'my-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit, DoCheck {
    shopProducts;
    num;
    allItem;
    sum;
    constructor(private cartService: CartService) {
        this.allItem = this.cartService.allItems;
        this.sum = this.cartService.priceAmount;
    }

    ngOnInit() {
        this.shopProducts = this.cartService.addedProd;
    }

    add(id){
        this.cartService.addShopProduct(id, 1);
        this.allItem +=1;
        this.sum +=19.99;
        this.cartService.cartHeaderOne.next(1);
    }

    reduce(id){
        this.cartService.addShopProduct(id, -1);
        this.allItem -=1;
        this.sum -=19.99;
        this.cartService.cartHeaderSubst.next(-1);
    }

    deleteItem(id, i){
        this.cartService.deleteShopProduct(id);
        this.shopProducts.splice(i, 1);
    }
    ngDoCheck() {
    }
}
