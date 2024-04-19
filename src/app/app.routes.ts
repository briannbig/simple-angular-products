import { Routes } from '@angular/router';
import { AddProductComponent } from './views/add-product/add-product.component';
import { ProductsComponent } from './views/products/products.component';
import { ViewProductComponent } from './views/view-product/view-product.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';

//here we define application routes
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
  {
    path: 'edit-product/:sku',
    component: EditProductComponent,
  },
];
