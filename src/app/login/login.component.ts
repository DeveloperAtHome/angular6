import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() checkLogin: EventEmitter<object> =  new EventEmitter();
  public username: string;
  public password: string;

  constructor() {
    this.username = '';
    this.password = '';
   }

  ngOnInit() {
  }

  login(){
    let data: object = {'username': this.username , 'password': this.password};
    this.checkLogin.emit(data);
  }

}
