import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop.model';
import { ShopService } from './../shop.service';

@Component({
    selector: 'my-shop-list',
    templateUrl: 'shop-list.component.html',
})
export class  ShopListComponent implements OnInit {
    shopProducts: Shop[];

    constructor(private shopService: ShopService) {}

    ngOnInit() {
        this.shopProducts = this.shopService.getShopProducts();
    }
}
