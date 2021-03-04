import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { forEach } from 'lodash';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  navButtons = new Array();
  icons = new Array();
  data: any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.navButtons = ['On Sale', 'Samsung', 'Apple'];
    this.icons = ['home', 'shopping_cart'];
    
  }
  // getProducts(){
  //   this.service.getProducts().subscribe((data: any) => {
  //     this.data = data;
  //     console.log('data', data);
  // })}

}
