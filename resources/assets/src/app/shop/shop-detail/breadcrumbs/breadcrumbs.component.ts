import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { ActivatedRoute, Router,  Params } from '@angular/router';

@Component({
    selector: 'my-breadcrumbs',
    templateUrl: 'breadcrumbs.component.html',
})

export class BreadcrumbsComponent  implements OnInit {
    id: number;
    shopProduct;
    totalAmount: number;
    constructor( private  shopService: ShopService,
                 private route: ActivatedRoute,
                 private router: Router ) {}
    ngOnInit(){
        this.totalAmount = this.shopService.dataBaseProd.length;
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.shopProduct = this.shopService.getShopProduct(this.id);
                }
            );
    }

    next(){
        this.id ++;
        if(this.id > this.totalAmount ){
            this.id = 0;
        }
        this.router.navigate(['shop',this.id]);
    }

    back(){
        if(this.id == 0) {
            this.id = this.totalAmount;
        }
        this.id --;
        this.router.navigate(['shop',this.id]);
    }
}
