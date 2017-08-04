import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {SubService} from "../../../cart.service";

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
                private subService: SubService) {
        this.allItem  = this.subService.getItems;
        this.sum = this.subService.getGeneralPrice;
        this.subService.header.subscribe(
            (item)=>{this.allItem = item}
        );
        this.subService.sum.subscribe(
            (item)=>{this.sum = item}
        );
    }
    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                }
            );

        this.shopProducts = this.subService.cartObjToArray();
        this.allItem = this.subService.getItems;
        this.sum = this.subService.getGeneralPrice;
    }
    hidePopup(){
      this.subService.hideEl.next(this.submitted);
    }
    deleteItem(id, i) {
        this.shopProducts.splice(i, 1);
        this.subService.deleteFromCard(id);
    }
}
