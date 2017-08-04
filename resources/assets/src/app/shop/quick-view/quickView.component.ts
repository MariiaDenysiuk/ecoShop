import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SubService} from "../../cart.service";

@Component({
    selector: 'my-quick-view',
    templateUrl: 'quickView.component.html',
    styleUrls: ['quickView.container.scss'],
})
export class QuickViewComponent {
    @Input() shopProduct;
    @ViewChild('productForm') shopForm: NgForm;
    constructor(
                 private sub: SubService) {}
    user = {
        quantity: '',
    };
    submitted : boolean = true;
    hidePopup: boolean = false;
    bool: boolean = true;
    onSubmit() {
        this.user.quantity = this.shopForm.value.userData.quantity;
        this.sub.showCartPopup.next(this.submitted);
        this.sub.addToCart(this.shopProduct.idprod-1, this.user.quantity);
        this.sub.hidePopup.next(this.hidePopup);
    }
    exit() {
        this.sub.hidePopup.next(this.hidePopup);
    }
    toggleImg(img, img0){
        img0.setAttribute('src', img.getAttribute('src'));
        this.bool = !this.bool;
    }
}
