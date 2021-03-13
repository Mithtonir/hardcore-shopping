import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  catchError,
  map
} from 'rxjs/operators';
import {
  countBy,
  filter,
  forEach,
  includes
} from 'lodash';
import {
  throwError
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/"
  }
  badges = {
    "sale": 0,
    "samsung": 0,
    "apple": 0
  }

  public getProducts() {

    return this.http.get(this.url + 'products').pipe(
      map((data: any) => {
        //Could use after filtering  data.lenght (in filterProductsForNavRouting) for optimization purposes but let it stay that way
        var samsungBadge = countBy(data, {
          producer: 'Samsung'
        });
        var appleBadge = countBy(data, {
          producer: 'Apple'
        });

        var saleBadge = 0;
        forEach(data, function (d: any) {
          if (includes(d.marks, 'Sale')) {
            saleBadge++
          }
        });
        //^^^
        this.assingnBadgesToObject(samsungBadge, saleBadge, appleBadge);
        return {
          "allProducts": data,
          "filteredProducts": this.filterProductsForNavRouting(data)
        };
      }),
      catchError(error => {
        return throwError('Something went wrong!');
      })
    );
  }

  assingnBadgesToObject(samsungBadge, saleBadge, appleBadge) {
    this.badges.sale = saleBadge;
    this.badges.samsung = samsungBadge.true;
    this.badges.apple = appleBadge.true;
  }
  filterProductsForNavRouting(data) {
    var samsungs = filter(data, function (d) {
      return d.producer === 'Samsung'
    })
    var apples = filter(data, function (d) {
      return d.producer === 'Apple'
    })
    var sales = filter(data, function (d) {
      return includes(d.marks, 'Sale') ? data : !data;
    })
    return [
      sales,
      samsungs,
      apples
    ]
  }
  confirmOrder(orders) {
    return this.http.post(this.url + 'orders', orders).subscribe(d => {})
  }
}
