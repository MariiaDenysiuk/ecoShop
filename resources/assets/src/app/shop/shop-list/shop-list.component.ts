import {Component, OnInit} from '@angular/core';
import { ShopService } from './../shop.service';
import {SubService} from "../../cart.service";


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
                private subService: SubService) {}

    ngOnInit() {
        this.shopProducts = this.shopService.getShopProducts();
        this.subService.hidePopup.subscribe(
            (hidePopup) => {
                this.show = hidePopup;
            }
        );
        let promise = new Promise((resolve, reject) =>
            {setTimeout(() => resolve(this.shopProducts = this.shopService.dataBaseProd), 2000);
                setTimeout(() => reject(new Error("ignored")), 1000);}
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
