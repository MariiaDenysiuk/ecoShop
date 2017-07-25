import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { ShopService } from '../../shop.service';

@Component({
    selector: 'my-cart-popup',
    templateUrl: './cartPopup.component.html',
})

export class CartPopupComponent implements OnInit {
    id: number;
    shopProducts;
    allItem;
    sum;
    submitted : boolean = false;
    constructor(private route: ActivatedRoute,
                private cartService: CartService,
                private shopService: ShopService) {
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
    hidePopup(){
      this.cartService.hideEl.next(this.submitted);
    }
    deleteItem(id, i) {
        this.cartService.deleteShopProduct(id);
        this.shopProducts.splice(i, 1);
        this.allItem = this.allItem - this.shopService.shopProducts[id].sumProd;
        this.sum = this.sum - this.shopService.shopProducts[id].sumPrise;
        this.cartService.cartHeaderDelete.next(this.allItem);
    }
}
