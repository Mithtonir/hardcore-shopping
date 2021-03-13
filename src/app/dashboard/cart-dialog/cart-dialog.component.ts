import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Router
} from '@angular/router';
import {
  ProductsService
} from 'src/app/products.service';
import {
  SharedService
} from '../shared.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {
  cart = JSON.parse(localStorage.getItem('cart'));

  constructor(private service: ProductsService, private shared: SharedService, private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.service.getProducts();
  }
  public deleteItem(indexOFelement) {
    if (this.cart) {
      if (this.cart[indexOFelement].qty > 1) {
        this.cart[indexOFelement].qty -= 1
      } else {
        this.cart.splice(indexOFelement, 1);
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  getTotalPrice() {
    return this.shared.getSummaryPriceCart();
  }
  submitOrder() {
    this.service.confirmOrder(this.cart);
    this.openSnackBar();
    localStorage.clear();
    this.router.navigateByUrl('/home');

  }
  openSnackBar() {
    this._snackBar.open('Order confirmed', '', {
      duration: 500

    });
  }

}
