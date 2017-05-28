import { Component, OnInit} from '@angular/core';
import { ShopService } from './shop.service';

@Component({
    selector: 'app-shop',
    templateUrl: 'shop.component.html',
    providers: [ShopService]
})
export class ShopComponent implements OnInit{
    ngOnInit() {
    }
}