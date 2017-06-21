import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ShopService } from '../shop.service';
import { CartService } from '../cart/cart.service';
import  { Shop } from '../shop.model';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'shop-detail',
    templateUrl: 'shop-detail.component.html',
})

export class ShopDetailComponent  implements OnInit{
    shopProduct: Shop;
    @ViewChild('f') shopForm: NgForm;
    user = {
        quantity: '',
    };
    submitted = false;
    id: number;

    constructor( private route: ActivatedRoute,
                 private  shopService: ShopService,
                 private cartService: CartService) {}
    ngOnInit(){
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.shopProduct = this.shopService.getShopProduct(this.id);
                }
            );
    }

    onSubmit(){
        this.user.quantity = this.shopForm.value.userData.quantity;
        this.submitted = true;
        this.cartService.cartHeader.next(Number(this.user.quantity));
        this.cartService.addShopProduct(this.id, this.user.quantity);
    }
    
}