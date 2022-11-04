import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonserviceService {
  apiurl = 'http://localhost:3000/api/';

  private cartitem$: Subject<any> = new Subject<any>();
  cartitem = this.cartitem$.asObservable();

  headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
  });
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(environment.baseurl + 'categories');
  }

  getsubCategories(id: string) {
    return this.http.get(environment.baseurl + `subcat/${id}`, {
      headers: this.headers,
    });
  }

  getProducts(
    category: string,
    price: number,
    page: number,
    size: number,
    filter: string
  ) {
    // if (page) {
    //   return this.http.get(
    //     environment.baseurl +
    //       `listallproducts?page=${page}&category=${category}&price=${price}&size=${size}`
    //   );
    // }
    // else{
    //   if(category || price){
    //     return this.http.get(
    //       environment.baseurl +
    //         `listallproducts?page=${page}&category=${category}&price=${price}&size=${size}`
    //     );
    //   }
    // }

    return this.http.get(
      environment.baseurl +
        `listallproducts?page=${page}&size=${size}&filter=${filter}`
    );
  }

  cart(value: boolean) {
    return this.cartitem$.next(value);
  }

  fetchproduct(id: any) {
    return this.http.get(environment.baseurl + `product/${id}`);
  }

  addtoCart(data: any) {
    return this.http.post(environment.baseurl + 'addcart', data, {
      headers: this.headers,
    });
  }

  getcart(id: any) {
    return this.http.get(environment.baseurl + `mycart/${id}`, {
      headers: this.headers,
    });
  }
}
