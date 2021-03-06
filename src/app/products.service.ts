import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { clone } from 'lodash';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/"
  }
  public getProducts(){

    return this.http.get(this.url + 'products').pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    ); 
  }

  confirmOrder(){
//to be done.
  }
}
