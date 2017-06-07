import { Component, OnInit, Input} from '@angular/core';
import { ShopService } from  '../../shop/shop.service';
import { Shop } from  '../../shop/shop.model';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'my-basket-popup',
    templateUrl: './basketPopup.component.html',
    styleUrls: ['./basketPopup.component.css']
})
export class BasketPopupComponent implements OnInit {
    @Input() prod: Shop;
    id:number;
    
    constructor(private route: ActivatedRoute, private  shopService: ShopService) {
        // Do stuff
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                }
            );
    }

    onclick(){


      this.shopService.startedEditing.next(this.id);

    }

}
