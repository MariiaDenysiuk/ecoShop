import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFound implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
