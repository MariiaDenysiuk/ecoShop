import { Component, Input, OnInit } from '@angular/core';
import { Shop } from  '../../shop.model';
import { ShopService} from './../../shop.service';

@Component({
    selector: 'shop-item',
    templateUrl: 'shop-item.component.html'
})

export class ShopItemComponent  implements OnInit{
    @Input() shopProduct: Shop;

    constructor(private shopService: ShopService) {}
   ngOnInit(){}
    j() {
        this.shopService.selectedItems.emit(this.shopProduct);

    }
}

