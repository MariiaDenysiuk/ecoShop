import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello ');
    }

}
