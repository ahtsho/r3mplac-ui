import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthenticationService) { }

  ngOnInit() {
    
  }
  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    this.authSvc.login(username,password);
  }

}
