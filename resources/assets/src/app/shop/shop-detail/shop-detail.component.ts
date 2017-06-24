import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    @ViewChild('f') shopForm: NgForm;
    user = {
        quantity: '',
    };
    submitted = false;
    id: number;
    numb: number;

    constructor( private route: ActivatedRoute,
                 private  shopService: ShopService,
                 private cartService: CartService,
                 private router: Router) {}
    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.shopProduct = this.shopService.getShopProduct(this.id);
                }
            );
        this.numb = this.shopService.shopProductsLen;
    }

    onSubmit() {
        this.user.quantity = this.shopForm.value.userData.quantity;
        this.submitted = true;
        this.cartService.cartHeader.next(Number(this.user.quantity));
        this.cartService.addShopProduct(this.id, this.user.quantity);
    }

    next(){
        this.id ++;
        if(this.id > this.numb){
            this.id = 0;
        }
        this.router.navigate(['shop',this.id]);
    }

    back(){
        this.id --;
        if(this.id == 0) {
            this.id = this.numb;
        }
        this.router.navigate(['shop',this.id]);
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
        img.style.border = "2px solid #D1CDC9";
    }

}
