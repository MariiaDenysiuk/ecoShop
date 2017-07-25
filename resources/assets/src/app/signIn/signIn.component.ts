import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-signin',
    templateUrl: 'signIn.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
    myform: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    customer: boolean = false;
    userName;
    constructor(private apiService: ApiService,
                private router: Router,
                private formService: FormService) {}
    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern('[^ @]*@[^ @]*')
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
    }

    createForm() {
        this.myform = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password
        });
    }

    onSubmit() {
        if (this.myform.valid) {
            this.userName = this.firstName.value;
        this.apiService.addShop(this.firstName.value, this.lastName.value, this.email.value, this.password.value)
            .subscribe(
                ()=> {
                    this.customer = true;
                    if (this.customer ) {
                        alert("thanks for registration");
                        this.formService.showUser.next(this.customer);
                        this.formService.userName.next(this.userName);
                        this.router.navigate(['/']);
                    }

                }
            );
            this.myform.reset();
        }
    }
}
