import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {SubService} from "../cart.service";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";
import {Response} from "@angular/http";

@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    title = 'app works!';
    allItem;
    user=true;
    userName ;
    show;
    cabinet;
    error;

    myform: FormGroup;
    login: FormControl;
    password: FormControl;

    constructor(private regService: RegistrationService,
                private apiService: ApiService,
                private sub: SubService,
                private router: Router,
                private registration: RegistrationService) {
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
        this.login = new FormControl('', [
            Validators.required,
            Validators.pattern('[^ @]*@[^ @]*')
        ]);

        this.password = new FormControl('', [
            Validators.required,
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
       this.show = false;
       this.cabinet = false;
    }

    signin(){
        this.router.navigate(['signin']);
        this.hideSignInForm();
    }

    onSubmit(){
        this.apiService.findUser(this.login.value, this.password.value)
            .subscribe(
                (user: Response) => {
                    this.user = true;
                    this.userName = user['first_name'];
                    this.registration.userName.next(this.userName);
                    this.show = false;
                    this.error = false;
                    this.myform.reset();
                },
                error => {
                    console.log(error);
                    this.show = true;
                    this.error = true;
                }
            );
    }

    userCab(){
       this.cabinet = true;
       this.show = false;
    }
}
