import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getAllProductsSortedBy(sortme: string): Observable<Product[]> {
    const url = `${this.baseUrl}/sortby/${sortme}`;
    return this.http.get<Product[]>(url);
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
