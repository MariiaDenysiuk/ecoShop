import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { AnswersComponent } from './answers/answers.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './shop/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './signIn/signIn.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ShopDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: 'answers', component: AnswersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cart', component: CartComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

