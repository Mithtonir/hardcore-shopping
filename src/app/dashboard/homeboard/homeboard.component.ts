import {
  Component,
  OnInit,
  Output
} from '@angular/core';
import {
  ProductsService
} from 'src/app/products.service';
import {
  find,
  find as _find,
  findIndex,
  valuesIn
} from 'lodash';
import {
  isEmpty as _isEmpty
} from 'lodash';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {
  filter
} from 'rxjs/operators';
import { SharedService } from '../shared.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.scss']
})
export class HomeboardComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  products: any;
  productsOnSale: any;
  productsSamsung: any;
  productsApple: any;
  allProducts: any;
  acutualUrl: String;
  cart = JSON.parse(localStorage.getItem('cart'));

  getProducts() {
    this.service.getProducts().subscribe((data) => {
      this.products = this.allProducts = data.allProducts
      this.productsOnSale = data.filteredProducts[0];
      this.productsSamsung = data.filteredProducts[1];
      this.productsApple = data.filteredProducts[2];
    });
  }

  ngOnInit() {
    this.getProducts();
  }
  ngAfterViewInit(): void {}
  ngOnDestroy() {}
  goTo(simpleUrl: String) {
    let home = '/home?prop='
    switch (simpleUrl) {
      case home + 'sale':
        this.products = this.productsOnSale;

        break;
      case home + 'samsung':
        this.products = this.productsSamsung;
        break;
      case home + 'apple':
        this.products = this.productsApple;
        break;
      default:
        this.products = this.allProducts
        break;
    }

  }
  
  trackBy(index: number, el: any): number {
    return el.id;
  }
  addToCart(item){
    if(!this.cart){
      this.cart = []
    }
    let isDoboubled = findIndex(this.cart, {'id': item.id});
    if(isDoboubled > -1){
      this.cart[isDoboubled].qty +=1
    }
    else { 
      item.qty = 1  
      this.cart.push(item);}
  
    localStorage.setItem('cart', JSON.stringify(this.cart) );
    this.shared.getSummaryPriceCart();
    this.openSnackBar()
  }
  openSnackBar() {
    this._snackBar.open('Product added to cart', 'ok', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      
    });
  }
  constructor(private service: ProductsService, private router: Router, private shared: SharedService, private _snackBar: MatSnackBar) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      var simpleUrl = valuesIn(event)[1];
      this.acutualUrl = simpleUrl;
      this.goTo(simpleUrl);
    });
  }
}
