import {Component, OnInit} from '@angular/core';
// import { Shop } from '../shop.model';
import { ShopService } from './../shop.service';
import { CartService } from '../cart/cart.service';


@Component({
    selector: 'my-shop-list',
    templateUrl: 'shop-list.component.html',
    styleUrls: ['./shop-list.component.scss'],
})
export class  ShopListComponent implements OnInit{
    shopProducts;
    show = false;
    shopProductPopup;
    constructor(private shopService: ShopService,
                private cartService: CartService,
                ) {}

    ngOnInit() {
        this.shopProducts = this.shopService.getShopProducts();
        this.cartService.hidePopup.subscribe(
            (hidePopup) => {
                this.show = hidePopup;
            }
        );
        let promise = new Promise((resolve, reject) =>
            {setTimeout(() => resolve(this.shopProducts = this.shopService.dataBaseProd), 2000);
                setTimeout(() => reject(new Error("ignored")), 2000);}
        );
        promise
            .then(
                result => console.log("Fulfilled: " + result),
                error => console.log("Rejected: " + error)
            );
    }


    showForm(id){
        this.show = true;
        this.shopProductPopup = this.shopService.getShopProduct(id);
    }


}
