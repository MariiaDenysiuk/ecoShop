import { Component, OnInit } from '@angular/core';
import { CartService } from '../shop/cart/cart.service';


@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    // encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {
    title = 'app works!';
    allItem = 0;

    constructor(private cartService: CartService) {}
    ngOnInit() {
        this.allItem = this.cartService.allItems;
        this.cartService.cartHeader.subscribe(
            (index: number) => { this.allItem += index; }
        );
        this.cartService.cartHeaderSubst.subscribe(
            (index: number) => { this.allItem += index; }
        );
        this.cartService.cartHeaderOne.subscribe(
            (index: number) => { this.allItem += index; }
        );
    }
}
