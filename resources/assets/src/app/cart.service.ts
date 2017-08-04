import { Injectable } from '@angular/core';
import {ShopService} from "./shop/shop.service";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubService {
    cartHeader = new Subject<number>();
    cartHeaderPlus = new Subject<number>();
    hideEl = new Subject<boolean>();
    hidePopup = new Subject<boolean>();
    showCartPopup = new Subject<boolean>();


    cartData = this.getCartData("cart") || {};
    getItems = this.getCartData("items");
    getGeneralPrice = this.getCartData("prices");
    header = new Subject();
    sum = new Subject();

    constructor(private shopService: ShopService){
        console.log(this.shopService.go);
    }

    setSettings() {
        if ('localStorage' in window && window['localStorage'] !== null) {
            return true;
        } else {
            console.log('Данные не сохранятся, ваш браузер не поддерживает Local storage');
        }
    }

    setCartData(key, d){
        localStorage.setItem(key, JSON.stringify(d));
        return false;
    }

    getCartData(key){
        return JSON.parse(localStorage.getItem(key));
    }

    cartObjToArray(){
        let u = this.cartData;
        let arr=[];
        for(let key in u){
            arr.push(u[key][0]);
        }
        return arr;
    }

    addToCart(id, q){
        let prod = this.shopService.dataBaseProd[id];
        if(this.cartData.hasOwnProperty(id)){
            this.cartData[id][0]['sumProd'] +=+q;
            this.cartData[id][0]['sumPrise'] +=+q*prod.price;
        } else {
            this.cartData[id] = [];
            this.cartData[id].push({'idprod':prod.idprod, 'name':prod.name, 'vendorCode':prod.vendorCode,
                'price': prod.price, 'img1': prod.img1, 'sumProd':prod.sumProd, 'sumPrise':prod.sumPrise});
            this.cartData[id][0]['sumProd']+=+q;
            this.cartData[id][0]['sumPrise']+=+q*prod.price;
        }
        this.getItems +=+q;
        this.getGeneralPrice += q*prod.price;
        this.header.next(this.getItems);
        this.sum.next(this.getGeneralPrice);
        this.setCartData('prices', this.getGeneralPrice);
        this.setCartData('items', this.getItems);
        this.setCartData('cart', this.cartData);
    }

    deleteFromCard(id) {
        console.log(id);
        this.getItems = this.getItems - this.cartData[id][0]['sumProd'];
        this.getGeneralPrice =  this.getGeneralPrice - this.cartData[id][0]['sumPrise'];
        this.header.next(this.getItems);
        this.sum.next(this.getGeneralPrice);
        delete this.cartData[id];
        this.setCartData('prices', this.getGeneralPrice);
        this.setCartData('items', this.getItems);
        this.setCartData('cart', this.cartData);
    }

}