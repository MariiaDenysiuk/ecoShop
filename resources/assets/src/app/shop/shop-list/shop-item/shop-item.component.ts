import { Component, Input } from '@angular/core';
import { Shop } from  '../../shop.model';

// import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'shop-item',
    templateUrl: 'shop-item.component.html'
})

export class ShopItemComponent {
    @Input() shopProduct: Shop;
    
}

