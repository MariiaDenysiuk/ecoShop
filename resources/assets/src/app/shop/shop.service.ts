// import { Shop } from './shop.model';
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

    getShopProducts() {
        return this.dataBaseProd;
    }
    getShopProduct(id: number) {
        return this.dataBaseProd[id];
    }
}
