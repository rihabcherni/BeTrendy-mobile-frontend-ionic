import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProfileComponent } from '../profile/profile.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { SellerComponent } from '../../seller.component';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      { path: 'products-list', component: ProductListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'home', component: SellerComponent },


    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
