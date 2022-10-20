import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  rootUrl = 'https://jsonplaceholder.typicode.com/';
  apiurl = 'http://localhost:3000/api/';

  private user$: Subject<any> = new Subject<any>();
  user = this.user$.asObservable();
  getUsers() {
    return this.http.get(this.rootUrl + 'users');
  }

  createUser(data: object) {
    return this.http.post(environment.baseurl + 'register', data);
  }
  
  getuser(value: boolean) {
    return this.user$.next(value);
  }

  getToken(data: object) {
    return this.http.post(environment.baseurl + 'auth/token', data);
  }
}
