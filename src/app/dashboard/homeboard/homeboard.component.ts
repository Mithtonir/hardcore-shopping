import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductsService } from 'src/app/products.service';
import {find as _find} from 'lodash';
import {isEmpty as _isEmpty} from 'lodash';

@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.scss']
})
export class HomeboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  productsOnSale = [];
  productsSamsung= [];
  productsApple =[];
  allProducts: any;
  getProducts(){
    this.service.getProducts().subscribe((data: any) => {
      this.allProducts = data;
      console.log('data', this.allProducts);
  })}
  ngOnInit(): void {
    this.getProducts();
  }
  checkSaleExistence(marks: any){
     _find(marks, 'Sale')
     console.log('_find(marks, \'Sale\')', _find(marks, 'Sale'))
   

  }

  constructor(private service: ProductsService) {
  }

}
