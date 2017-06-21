import { Component, OnInit, Input} from '@angular/core';
import { Shop } from  '../../../shop/shop.model';
import { ActivatedRoute, Params} from '@angular/router';
import { CartService } from '../cart.service';

@Component({
    selector: 'my-cart-popup',
    templateUrl: './cartPopup.component.html'
})

export class CartPopupComponent implements OnInit {
    @Input() prod: Shop;
    id:number;
    shopProducts;
    allItem;
    sum;
    constructor(private route: ActivatedRoute,
                private cartService: CartService) {
        this.allItem = this.cartService.allItems;
        this.sum = this.cartService.priceAmount;
    }
    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                }
            );

        this.shopProducts = this.cartService.addedProd;
    }
}
