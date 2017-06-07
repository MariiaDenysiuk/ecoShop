import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ShopService } from '../shop.service';
import  { Shop } from '../shop.model';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'shop-detail',
    templateUrl: 'shop-detail.component.html',
    providers: [ShopService]
})

export class ShopDetailComponent  implements OnInit{
    shopProduct: Shop;
    @ViewChild('f') shopForm: NgForm;
    user = {
        quantity: '',
    };
    submitted = false;
    id: number;
    num: number;
    add;
    numP: number;
    addP;
    constructor( private route: ActivatedRoute, private  shopService: ShopService) {}
    ngOnInit(){
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.shopProduct = this.shopService.getShopProduct(this.id);
                }
            );
        this.num = this.id+1;
        this.add = '../' + (this.num);
        this.numP = this.id-1;
        this.addP = '../' + (this.numP);

    }

    onSubmit(){
        this.user.quantity = this.shopForm.value.userData.quantity;
        this.submitted = true;
        console.log(this.shopForm);
    }

    forward() {
        this.num++;
        this.add = '../' + this.num;
        if(this.num > this.shopService.getShopProducts().length - 1){
            this.add='../';
        }

    }
    backward(){
        this.numP = this.numP - 1;
        this.addP = '../' + this.numP;
        if(this.numP <= 0){
            this.addP='../';
        }
    }
}