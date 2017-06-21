import { ShopService } from "../shop.service";
import { Subject } from 'rxjs/Subject';
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
    addedProd = [];
    allItems = 0;
    priceAmount = 0;
    cartHeader = new Subject<number>();
    cartHeaderOne = new Subject<number>();
    cartHeaderSubst = new Subject<number>();
    
    constructor(private shopService: ShopService){
    };

    addShopProduct(id: number, q){
        this.addedProd.push(this.shopService.getShopProduct(id));
        this.shopService.shopProducts[id].numbe.push(q);
        if(this.shopService.shopProducts[id].numbe.length>1 ){
            this.addedProd.pop();
        }
        console.log("one " + this.shopService.shopProducts[id].numbe);
        this.shopService.shopProducts[id].sumProd = this.shopService.shopProducts[id].numbe.reduce(function(sum, current){
            return Number(sum) + Number(current);
        });
        this.shopService.shopProducts[id].sumPrise = this.shopService.shopProducts[id].sumProd * this.shopService.shopProducts[id].price;
        this.allItems += Number(q);
        this.priceAmount += Number(this.shopService.shopProducts[id].price * q);
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