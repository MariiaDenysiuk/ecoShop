import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-answers',
    templateUrl: './answers.component.html',
    styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
