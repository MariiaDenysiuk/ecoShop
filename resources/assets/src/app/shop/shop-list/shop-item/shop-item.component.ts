import { Component, Input } from '@angular/core';
import { Shop } from  '../../shop.model';

@Component({
    selector: 'my-shop-item',
    templateUrl: 'shop-item.component.html',
    styleUrls: ['./shopitem.component.scss']
})

export class ShopItemComponent {
    @Input() shopProduct: Shop;
    
}

