import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  public getSavings() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public addProduct(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
