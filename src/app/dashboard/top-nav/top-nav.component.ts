import {
  Component,
  OnInit
} from '@angular/core';
import {
  forEach,
  sumBy
} from 'lodash';
import {
  Observable
} from 'rxjs';
import {
  ProductsService
} from 'src/app/products.service';
import {
  SharedService
} from '../shared.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  navButtons = new Array();
  icons = new Array();
  data: any;
  badge: any;
  constructor(private service: ProductsService, private shared: SharedService) {}

  ngOnInit(): void {
    this.navButtons = ['On Sale', 'Samsung', 'Apple'];
    this.icons = ['home', 'shopping_cart'];
    this.getBadges();
    this.getSummaryPriceCart();
  }
  getSummaryPriceCart() {
    return this.shared.getSummaryPriceCart();
  }
  getBadges() {
    this.badge = this.service.badges
  }
}
