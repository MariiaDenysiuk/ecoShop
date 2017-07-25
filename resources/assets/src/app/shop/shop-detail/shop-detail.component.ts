import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopService } from '../shop.service';
import { CartService } from '../cart/cart.service';
import  { Shop } from '../shop.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'my-shop-detail',
    templateUrl: 'shop-detail.component.html',
    styleUrls: ['./shop.detail.scss'],
})

export class ShopDetailComponent  implements OnInit {
    shopProduct: Shop;
    @ViewChild('productForm') shopForm: NgForm;
    user = {
        quantity: '',
    };
    submitted : boolean = true;
    id: number;
    bool: boolean = true;

    constructor( private route: ActivatedRoute,
                 private  shopService: ShopService,
                 private cartService: CartService) {}
    
    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.shopProduct = this.shopService.getShopProduct(this.id);
                }
            );
    }

    onSubmit() {
        this.user.quantity = this.shopForm.value.userData.quantity;
        this.cartService.cartHeader.next(+(this.user.quantity));
        this.cartService.addShopProduct(this.id, this.user.quantity);
        this.cartService.showCartPopup.next(this.submitted);
    }
    
    toggle(el, insert){
        let displayEl = window.getComputedStyle(el).display;
        if(displayEl === "none"){
           el.style.display="block";
            insert.innerText = "-"
        }else {
            el.style.display="none";
            insert.innerText = "+"
        }
    }

    toggleImg(img, img0){
        img0.setAttribute('src', img.getAttribute('src'));
        this.bool = !this.bool;
    }

}
