import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getProducts() {
      return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getAllProductsSortedBy(sortme: string): Observable<Product[]> {
    const url = `${this.baseUrl}/products/sortby/${sortme}`;
    return this.http.get<Product[]>(url);
  }

  getProductBySku(sku: string) {
    return this.http.get<Product>(`${this.baseUrl}/product/${sku}`);
  }

  public addProduct(product: Product) {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
