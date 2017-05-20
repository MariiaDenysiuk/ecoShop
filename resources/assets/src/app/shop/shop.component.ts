import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-shop',
    templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Shop');
    }

}