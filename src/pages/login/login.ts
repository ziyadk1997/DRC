import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent , HttpClient } from '@angular/common/http'
import { AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loginBE: LoginProvider) {
  }
  email: any;
  password: any;
  Login() {
    ////setRoot(WelcomePage);
    this.loginBE.doLogin(this.email, this.password).then(res => {
      if (res == true) {
        this.navCtrl.setRoot(WelcomePage);
      } else {
        this.alertCtrl.create(
          {
            title: 'Login Failed',
            subTitle: 'Wrong username or password',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });
  }
}
