import { Component, Input, OnInit } from '@angular/core';
import { Shop } from '../shop.model';

@Component({
    selector: 'shop-detail',
    templateUrl: 'shop-detail.component.html'
})

export class ShopDetailComponent  implements OnInit{
    @Input() shopProduct: Shop;

    ngOnInit(){
        console.log(this.shopProduct);
    }
}