import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
 providedIn: 'root',
})
export class AuthenticationService {
	private userUrl = '/api';

  constructor( private http : HttpClient ) { }

  login(username, password){
    this.http.post('http://localhost:8090/users/login', {'username':username, 'mister': password})
    .subscribe((data)=>console.log(data));
  }
}
