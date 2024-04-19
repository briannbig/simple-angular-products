import { Routes } from '@angular/router';
import { AddProductComponent } from './views/add-product/add-product.component';
import { ProductsComponent } from './views/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
];
