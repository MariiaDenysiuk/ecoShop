import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {SubService} from "../cart.service";
import {RegistrationService} from "../registration.service";

@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    title = 'app works!';
    allItem;
    user;
    userName ;
    show;

    myform: FormGroup;
    login: FormControl;
    password: FormControl;

    constructor(
                private regService: RegistrationService,
                private apiService: ApiService,
                private sub: SubService) {
        this.allItem = this.sub.getItems;

        this.sub.header.subscribe(
            (h)=>{ this.allItem = h;}
        );
    }
    ngOnInit() {
        this.createFormControls();
        this.createForm();

        this.regService.showUser.subscribe(
            (visibleUser) => { this.user = visibleUser;  }
        );
        this.regService.userName.subscribe(
            (name) => {
                this.userName = name;
            }
        );
    }

    createFormControls() {
        this.login = new FormControl('', Validators.required);

        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
    }

    createForm() {
        this.myform = new FormGroup({
            login: this.login,
            password: this.password
        });
    }
    showSignInForm(){
        this.show = true;
    }
    hideSignInForm(){
            setTimeout(() => {
                this.show = false;
            }, 3000);
    }

    onSubmit(){
        this.apiService.findUser(this.login.value, this.password.value)
            .subscribe(
                (user) => {
                    this.user = true;
                    this.userName = user['first_name'];
                }
            );
    }
}
