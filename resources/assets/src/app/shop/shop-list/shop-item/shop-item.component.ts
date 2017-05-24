import { Component, Input } from '@angular/core';
import { Shop } from  '../../shop.model';

// import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'shop-item',
    templateUrl: 'shop-item.component.html'
})

export class ShopItemComponent {
    @Input() shopProduct: Shop;
    // constructor( private route: ActivatedRoute) {}
    //    ngOnInit(){
    //        this.route.params
    //            .subscribe(
    //                (params: Params) => {
    //                    console.log('jjjjjjjjjjjjjjjj' + params['name'] + this.shopProduct.nameProd );
    //                }
    //            )
    //    }
   //  j() {
   //      this.shopService.selectedItems.emit(this.shopProduct);
   //  }


}

