import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showLoginPage: boolean = true;
  public showMainPage: boolean = false;
  public loginUsername: string = 'admin';
  public loginPassword: string = '123';
  title = 'task1';

  public CheckLoginData(data: object){
    let username = data['username'];
    let password = data['password'];
    if(username === this.loginUsername && password === this.loginPassword){
      this.showLoginPage = false;
      this.showMainPage = true;
    }
  }
}
