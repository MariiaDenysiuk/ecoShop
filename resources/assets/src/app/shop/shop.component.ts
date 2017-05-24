import { Component, OnInit} from '@angular/core';
import { Shop } from './shop.model';
import { ShopService } from './shop.service';

@Component({
    selector: 'app-shop',
    templateUrl: 'shop.component.html',
    // styles: ['shop-detail{display: none;} .display {display: block;}'],
    providers: [ShopService]
})
export class ShopComponent implements OnInit{
    // display: boolean;
    // handleDetailPopup(value: boolean){
    //     this.display = value;
    //     console.log(this.display);
    // }
    selectedProduct: Shop;
    constructor(private shopService: ShopService) {}
    ngOnInit() {
        this.shopService.selectedItems
            .subscribe(
                (products: Shop) => {
                    this.selectedProduct = products;
                }
            );
        console.log(this.selectedProduct);

    }


}