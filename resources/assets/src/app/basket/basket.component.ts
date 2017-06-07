import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from  '../shop/shop.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'my-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss'],
    providers: [ShopService]
})
export class BasketComponent implements OnInit, OnDestroy {
    sub: Subscription;
    id: number;

    constructor(private  shopService: ShopService) {
        // Do stuff
    }

    ngOnInit() {
           this.sub =  this.shopService.startedEditing
                .subscribe(
                    (index: number)=> {
                        this.id = index;
                        console.log(this.id);

                    }
                );
        console.log(this.id);

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
