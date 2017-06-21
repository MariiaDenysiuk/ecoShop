import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'signin',
    templateUrl: 'signIn.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
    langs: string[] = [
        'English',
        'Ukrainian'
    ];
    myform: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
    ngOnInit(){
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.language = new FormControl('', Validators.required);
    }

    createForm() {
        this.myform = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
    }

    onSubmit() {
        if (this.myform.valid) {
            console.log("Form Submitted!");
            this.myform.reset();
        }
    }
}
