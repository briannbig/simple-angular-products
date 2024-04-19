import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent implements OnInit {
  productSku? = '';
  product?: Product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productSku = this.route.snapshot.params['sku'];

    this.productService.getProductBySku(this.productSku!).subscribe((res) => {
      this.product = res;
    });
  }
}
