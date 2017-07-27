import { Component, Input, ViewChild } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'my-quick-view',
    templateUrl: 'quickView.component.html',
    styleUrls: ['quickView.container.scss'],
})
export class QuickViewComponent {
    @Input() shopProduct;
    @ViewChild('productForm') shopForm: NgForm;
    constructor( private cartService: CartService) {}
    user = {
        quantity: '',
    };
    submitted : boolean = true;
    hidePopup: boolean = false;
    bool: boolean = true;
    onSubmit() {
        this.user.quantity = this.shopForm.value.userData.quantity;
        this.cartService.showCartPopup.next(this.submitted);
        this.cartService.cartHeader.next(Number(this.user.quantity));
        this.cartService.addShopProduct(this.shopProduct.idprod-1, this.user.quantity);
        this.cartService.hidePopup.next(this.hidePopup);
    }
    exit() {
        this.cartService.hidePopup.next(this.hidePopup);
    }
    toggleImg(img, img0){
        img0.setAttribute('src', img.getAttribute('src'));
        this.bool = !this.bool;
    }
}
