import { Routes } from '@angular/router';
import { AddProductComponent } from './views/add-product/add-product.component';
import { ProductsComponent } from './views/products/products.component';
import { ViewProductComponent } from './views/view-product/view-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'view-product/:sku',
    component: ViewProductComponent,
  },
];
