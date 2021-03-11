import { Injectable } from '@angular/core';
import { sumBy } from 'lodash';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { 
  }
  getSummaryPriceCart(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let price = sumBy(cart, function (c:any) {
     return c.price
    }); 
    return price;
  }
}
