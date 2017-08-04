import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopService } from '../shop.service';
import { NgForm } from '@angular/forms';
import {SubService} from "../../cart.service";

@Component({
    selector: 'my-shop-detail',
    templateUrl: 'shop-detail.component.html',
    styleUrls: ['./shop.detail.scss'],
})

export class ShopDetailComponent  implements OnInit {
    shopProduct;
    @ViewChild('productForm') shopForm: NgForm;
    user = {
        quantity: '',
    };
    submitted : boolean = true;
    id: number;
    bool: boolean = true;

    constructor( private route: ActivatedRoute,
                 private  shopService: ShopService,
                 private sub: SubService) {}
    
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
        this.sub.addToCart(this.id, this.user.quantity);
        this.sub.showCartPopup.next(this.submitted);
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
