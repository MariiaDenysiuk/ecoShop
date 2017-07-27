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
        this.shopService.dataBaseProd[id].numb.push(+q);
        if (this.shopService.dataBaseProd[id].numb.length > 1) {
            this.addedProd.pop();
        }
        this.shopService.dataBaseProd[id].sumProd = this.shopService.dataBaseProd[id].numb.reduce(function(sum, current) {
            return Number(sum) + Number(current);
        });
        this.shopService.dataBaseProd[id].sumPrise = Math.round((this.shopService.dataBaseProd[id].sumProd * this.shopService.dataBaseProd[id].price)*100)/100;
        this.allItems += +(q);
        this.priceAmount += +Math.round((this.shopService.dataBaseProd[id].price * q)*100)/100;
    };

    addItem(id: number, item: number) {
        this.addShopProduct(id, item);
    }

    deleteShopProduct(id: number) {
        this.shopService.dataBaseProd[id].numb.splice(0, this.shopService.dataBaseProd[id].numb.length);
        this.allItems = this.allItems - this.shopService.dataBaseProd[id].sumProd;
        this.priceAmount = this.priceAmount - this.shopService.dataBaseProd[id].sumPrise;
    }
}
