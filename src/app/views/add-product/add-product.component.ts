import { Component } from '@angular/core';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  product: Product = {
    sku: '',
    description: '',
    category: 'console',
    price: 0,
    name: '',
  };

  constructor(private productService: ProductService) {}

  onSubmit(): void {
    this.productService.addProduct(this.product).subscribe(
      () => {
        console.log('Product added successfully');
        // Reset the form
        this.product = {
          sku: '',
          description: '',
          category: 'console',
          price: 0,
          name: '',
        };
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
