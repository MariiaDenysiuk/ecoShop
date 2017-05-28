import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ShopService } from '../shop.service';


@Component({
    selector: 'shop-detail',
    templateUrl: 'shop-detail.component.html',
    providers: [ShopService]
})

export class ShopDetailComponent  implements OnInit{
    shopProduct: any;
    id: number;
    
    constructor( private route: ActivatedRoute, private  shopService: ShopService) {}
    ngOnInit(){
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.shopProduct = this.shopService.getShopProduct(this.id);
                }
            )
    }

    forward() {
        // console.log(this.route.snapshot);
    }
}