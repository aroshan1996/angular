import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  rootUrl = 'https://jsonplaceholder.typicode.com/';
  apiurl = 'http://localhost:3000/api/';

  private user$: Subject<any> = new Subject<any>();
  user = this.user$.asObservable();
  show: boolean = false;
  getUsers() {
    return this.http.get(this.rootUrl + 'users');
  }

  createUser(data: object) {
    return this.http.post(this.apiurl + 'register', data);
  }

  
  getToken(data: object) {
    this.user$.next(data);
    return this.http.post(this.apiurl + 'auth/token', data);
  }
}
