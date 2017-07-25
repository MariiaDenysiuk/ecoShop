import { Component, OnInit } from '@angular/core';
import { CartService } from '../shop/cart/cart.service';
import { FormService } from '../form.service';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    // encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {
    title = 'app works!';
    allItem:number = 0;
    user;
    userName ;
    show;

    myform: FormGroup;
    login: FormControl;
    password: FormControl;

    constructor(private cartService: CartService,
                private formService: FormService,
                private apiService: ApiService) {}
    ngOnInit() {
        this.createFormControls();
        this.createForm();
        this.allItem = this.cartService.allItems;
        this.cartService.cartHeader.subscribe(
            (index: number) => { this.allItem += index; }
        );
        this.cartService.cartHeaderMinus.subscribe(
            (index: number) => { this.allItem += index; }
        );
        this.cartService.cartHeaderPlus.subscribe(
            (index: number) => { this.allItem += index; }
        );
        this.cartService.cartHeaderDelete.subscribe(
            (index: number) => { this.allItem = index; }
        );
        this.formService.showUser.subscribe(
            (visibleUser) => { this.user = visibleUser;  }
        );
        this.formService.userName.subscribe(
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
