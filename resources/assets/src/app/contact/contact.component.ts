import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'my-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('f') contactForm: NgForm;
    user = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    submitted = false;
    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

    onSubmit(){
        this.user.name = this.contactForm.value.userData.name;
        this.user.email = this.contactForm.value.userData.email;
        this.user.phone = this.contactForm.value.userData.phone;
        this.user.message = this.contactForm.value.userData.message;
        this.submitted = true;
        console.log(this.contactForm);

    }

}
