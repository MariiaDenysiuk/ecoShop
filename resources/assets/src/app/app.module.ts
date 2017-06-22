import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { AnswersComponent } from './answers/answers.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './shop/cart/cart.component';
import { CartPopupComponent } from './shop/cart/cartPopup/cartPopup.component';
import { ShopItemComponent } from './shop/shop-list/shop-item/shop-item.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopService } from './shop/shop.service';
import { CartService } from './shop/cart/cart.service';
import { SignInComponent } from './signIn/signIn.component';


import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ShopItemComponent,
    ShopListComponent,
    ShopDetailComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    AnswersComponent,
    ContactComponent,
    CartComponent,
    CartPopupComponent,
    PageNotFoundComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShopService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
