import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ShopService } from '../shop.service';

@Component({
    selector: 'my-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    shopProducts;
    allItem;
    sum;

    constructor(private cartService: CartService, private shopService: ShopService) {
        this.allItem = this.cartService.allItems;
        this.sum = this.cartService.priceAmount;
    }

    ngOnInit() {
        this.shopProducts = this.cartService.addedProd;
        console.log(this.shopProducts);
    }

    add(id) {
        this.cartService.addShopProduct(id, 1);
        this.allItem += 1;
        this.sum += this.shopService.shopProducts[id].priceProd;
        this.cartService.cartHeaderPlus.next(1);
    }

    reduce(id) {
        if(this.allItem === 0){
            this.shopService.shopProducts[id].sumProd = 0
        } else {
            this.cartService.addShopProduct(id, -1);
            this.allItem -= 1;
            this.sum -= this.shopService.shopProducts[id].priceProd;
            this.cartService.cartHeaderMinus.next(-1);
        }

    }

    deleteItem(id, i) {
        this.cartService.deleteShopProduct(id);
        this.shopProducts.splice(i, 1);
        this.allItem = this.allItem - this.shopService.shopProducts[id].sumProd;
        this.sum = this.sum - this.shopService.shopProducts[id].sumPrise;
        this.cartService.cartHeaderDelete.next(this.allItem);
    }

}
