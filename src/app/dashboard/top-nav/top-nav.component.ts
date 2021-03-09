import {
  Component,
  OnInit
} from '@angular/core';
import {
  forEach
} from 'lodash';
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

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.navButtons = ['On Sale', 'Samsung', 'Apple'];
    this.icons = ['home', 'shopping_cart'];
    this.getBadges();
  }
  getBadges() {
    this.badge = this.service.badges
  }
}
