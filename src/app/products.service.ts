import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/"
  }
  public getProducts(){
    return this.http.get(this.url + 'products');
  }
  confirmOrder(){
//to be done.
  }
}
