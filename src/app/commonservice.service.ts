import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  apiurl = 'http://localhost:3000/api/';
  constructor(private http :HttpClient) { }

getCategories(){
return this.http.get(this.apiurl + 'getcategories')
}

}
