import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductsService
} from 'src/app/products.service';
import {
  find as _find,
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
import {bootstrap} from 'node_modules/bootstrap';

@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.scss']
})
export class HomeboardComponent implements OnInit {
  products: any;
  productsOnSale: any;
  productsSamsung: any;
  productsApple: any;
  allProducts: any;
  acutualUrl: String;

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
    this.goTo(this.acutualUrl)
  }
  ngAfterContentInit(): void {
    this.products = this.allProducts;
  }
  
  ngAfterViewInit(): void {}
  ngOnDestroy() {}
  goTo(simpleUrl) {
    switch (simpleUrl) {
      case '/sale?prop=sale':
        this.products = this.productsOnSale;
        break;
      case '/samsung?prop=samsung':
        this.products = this.productsSamsung;
        break;
      case '/apple?prop=apple':
        this.products = this.productsApple;
        break;
      default:
        this.products = this.allProducts
        break;
    }

  }
  trackByMethod(index: number, el: any): number {
    return el.id;
  }
  constructor(private service: ProductsService, private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      var simpleUrl = valuesIn(event)[1];
      this.acutualUrl = simpleUrl;
      this.goTo(simpleUrl);
    });
  }
}
