import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { AnswersComponent } from './answers/answers.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/name', component: ShopDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: 'answers', component: AnswersComponent},
  { path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(routes);

