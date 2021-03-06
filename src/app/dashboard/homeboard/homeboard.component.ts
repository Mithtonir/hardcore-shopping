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
  productsOnSale = [];
  productsSamsung= [];
  productsApple =[];
  allProducts: any;

  testData: any;
  getProducts(){
    this.service.getProducts().subscribe((data: any) => {
      this.allProducts = data;
  })}
  ngOnInit(): void {
    this.testData = 122;
    this.getProducts();
  }
  checkSaleExistence(marks: any){
     _find(marks, 'Sale')
     console.log('_find(marks, \'Sale\')', _find(marks, 'Sale'))
   

  }

  constructor(private service: ProductsService) {
  }

}
