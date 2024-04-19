import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => (this.products = res));
  }
}
