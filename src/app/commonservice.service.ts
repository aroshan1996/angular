import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonserviceService {
  apiurl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(environment.baseurl + 'getcategories');
  }

  getProducts(category: string,price: number, page: number, size: number, ) {
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

    return this.http.get(environment.baseurl + `listallproducts?page=${page}&size=${size}`);
  }

fetchproduct(id:any){
return this.http.get(environment.baseurl+`product/${id}`)
}

}
