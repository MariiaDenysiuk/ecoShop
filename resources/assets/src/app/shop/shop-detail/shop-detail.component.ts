import { Component, OnInit } from '@angular/core';



import { ActivatedRoute} from '@angular/router';


@Component({
    selector: 'shop-detail',
    templateUrl: 'shop-detail.component.html'
})

export class ShopDetailComponent  implements OnInit{
    shopProduct: any;
    
    constructor( private route: ActivatedRoute) {}
    ngOnInit(){

        this.shopProduct = this.route.snapshot.queryParams;
    }
}