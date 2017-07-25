import { ShopService } from '../shop.service';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    addedProd = [];
    allItems:number = 0;
    priceAmount:number = 0;
    cartHeader = new Subject<number>();
    cartHeaderPlus = new Subject<number>();
    cartHeaderMinus = new Subject<number>();
    cartHeaderDelete = new Subject<number>();
    hideEl = new Subject<boolean>();
    hidePopup = new Subject<boolean>();
    showCartPopup = new Subject<boolean>();

    constructor(private shopService: ShopService) {};
    addShopProduct(id: number, q) {
        this.addedProd.push(this.shopService.getShopProduct(id));
        this.shopService.shopProducts[id].numbe.push(q);
        if (this.shopService.shopProducts[id].numbe.length > 1) {
            this.addedProd.pop();
        }
        this.shopService.shopProducts[id].sumProd = this.shopService.shopProducts[id].numbe.reduce(function(sum, current) {
            return Number(sum) + Number(current);
        });
        this.shopService.shopProducts[id].sumPrise = Math.round((this.shopService.shopProducts[id].sumProd * this.shopService.shopProducts[id].price)*100)/100;
        this.allItems += +(q);
        this.priceAmount += +Math.round((this.shopService.shopProducts[id].price * q)*100)/100;
        localStorage.setItem("lastname", "misha");
    };

    addItem(id: number, item: number) {
        this.addShopProduct(id, item);
    }

    deleteShopProduct(id: number) {
        this.shopService.shopProducts[id].numbe.splice(0, this.shopService.shopProducts[id].numbe.length);
        this.allItems = this.allItems - this.shopService.shopProducts[id].sumProd;
        this.priceAmount = this.priceAmount - this.shopService.shopProducts[id].sumPrise;
    }

}
