import { Component, OnInit } from '@angular/core';
import { CartService } from './shop/cart/cart.service';
import { showStateTrigger } from './shop/shop-detail/animations';
import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        showStateTrigger
    ]
})
export class AppComponent implements OnInit {
  submitted : boolean = false;
  constructor( private cartService: CartService) {}
  ngOnInit() {
    this.cartService.showCartPopup.subscribe(
        (showCart) => {
          this.submitted = showCart;
        }
    );
    this.cartService.hideEl.subscribe(
        (hideEl) => {
          this.submitted = hideEl;
        }
    );
  }
}
