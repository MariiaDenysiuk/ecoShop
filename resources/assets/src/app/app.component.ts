import { Component, OnInit } from '@angular/core';
import { showStateTrigger } from './shop/shop-detail/animations';
import '../style/app.scss';
import {SubService} from "./cart.service";

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
  constructor( private subService: SubService) {}
  ngOnInit() {
    this.subService.showCartPopup.subscribe(
        (showCart) => {
          this.submitted = showCart;
        }
    );
    this.subService.hideEl.subscribe(
        (hideEl) => {
          this.submitted = hideEl;
        }
    );
  }
}
