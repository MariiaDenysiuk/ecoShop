import { Shop } from './shop.model';
import { ApiService } from "../api.service"
import {Injectable} from "@angular/core";

@Injectable()
export class ShopService {
    dataBaseProd;
    constructor(private apiService: ApiService){
        this.apiService.getShop().subscribe(
            (info) => {info.map(function (obj) {
                obj.numb = [];
                obj.sumProd = 0;
                obj.sumPrise = 0;
            });
            this.dataBaseProd = info;

            });

    }
    shopProducts: Shop[] = [
        new Shop(0, 'Your product1', 19.99, 'img/pr-2-1.jpg', 'img/pr-2-3.jpg', [], 0, 0),
        new Shop(1, 'Your product2', 18.99, 'img/pr-3-1.jpg', 'img/pr-3-3.jpg', [], 0, 0),
        new Shop(2, 'Your product', 17.99, 'img/pr-4-3.jpg', 'img/pr-4-3.jpg', [], 0, 0),
        new Shop(3, 'Your product', 16.99, 'img/pr-2-1.jpg', 'img/pr-2-3.jpg', [], 0, 0),
        new Shop(4, 'Your product', 144.99, 'img/pr-3-1.jpg', 'img/pr-3-3.jpg', [], 0, 0),
        new Shop(5, 'Your product', 10.99, 'img/pr-4-3.jpg', 'img/pr-4-3.jpg', [], 0, 0)
    ];

    getShopProducts() {
        return this.shopProducts.slice();
    }
    getShopProduct(id: number) {
        return this.shopProducts[id];
    }
    shopProductsLen = this.shopProducts.length-1;
}
