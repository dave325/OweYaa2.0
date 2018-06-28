import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials = {
    username: "",
    email: "",
    password: ""
  };
  doRegister = function (credentials) {
    var user = {
      firstname: credentials.firstname,
      lastname: credentials.lastname,
      password: credentials.password,
      email: credentials.email,
      type: credentials.type,
      username: credentials.username,
      website: credentials.companyWebSite,
      phone: credentials.phoneNumber,
      compName: credentials.companyName
    };

  constructor(user: User) { }

  ngOnInit() {

  }


}
