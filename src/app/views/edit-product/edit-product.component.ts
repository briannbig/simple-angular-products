import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  sku?: string;
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sku = this.route.snapshot.params['sku'];
    this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getProductBySku(this.sku!).subscribe((product) => {
      this.product = product;
    });
  }

  onSubmit(): void {
    this.productService.editProduct(this.product!);
  }
}
