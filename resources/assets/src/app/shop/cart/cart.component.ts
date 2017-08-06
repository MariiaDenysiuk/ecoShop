import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import {SubService} from "../../cart.service";
import { showPopupTrigger } from './popup.animation';
import {RegistrationService} from "../../registration.service";

@Component({
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    animations: [
        showPopupTrigger
    ]
})
export class CartComponent implements OnInit {
    shopProducts;
    allItem;
    sum;
    popup;
    orderPopup;
    userName;

    constructor(private shopService: ShopService,
                private sub: SubService,
                private registration: RegistrationService
               ) {
        this.allItem  = this.sub.getItems;
        this.sum = this.sub.getGeneralPrice;
        this.sub.header.subscribe(
            (item)=>{this.allItem = item}
        );
        this.sub.sum.subscribe(
            (item)=>{this.sum = item}
        );
    }

    ngOnInit() {
        this.shopProducts = this.sub.cartObjToArray();
        this.registration.userName.subscribe(
            (name) => {
                this.userName = name;
            }
        );
    }

    add(id) {
        this.allItem += 1;
        this.sum += this.shopService.dataBaseProd[id].price;
        this.sub.addToCart(id, 1);
    }

    reduce(id) {
        if(this.allItem === 0){
            this.shopService.dataBaseProd[id].sumProd = 0
        } else {
            this.allItem -= 1;
            this.sum -= this.shopService.dataBaseProd[id].price;
            this.sub.addToCart(id, -1);
        }

    }

    deleteItem(id, i) {
        this.shopProducts.splice(i, 1);
        this.sub.deleteFromCard(id);
    }

    order(){
        if(!this.userName){
            this.popup = true;
        } else {
            this.orderPopup = true;
        }
    }

    hidePopup(){
        this.popup = false;
        this.orderPopup = false;
    }

}
